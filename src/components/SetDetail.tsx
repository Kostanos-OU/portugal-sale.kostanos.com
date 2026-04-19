import { useParams, Link, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import Markdown from "react-markdown";
import { useLang } from "../hooks/useLang";
import { SETS, getSetPricing, getSetImages } from "../data/sets";
import { Gallery } from "./Gallery";
import { PriceBadge } from "./PriceBadge";
import { CONTACT_EMAIL, WA_NUMBER } from "../constants";

export function SetDetail() {
  const { id, imageIndex } = useParams<{ id: string; imageIndex?: string }>();
  const { lang, t } = useLang();
  const [searchParams] = useSearchParams();
  const set = SETS.find(s => s.id === id);

  useEffect(() => {
    if (set) {
      document.title = `${set.title[lang]} — ${t.siteTitle}`;
    }
    return () => { document.title = t.siteTitle; };
  }, [set, lang, t]);

  if (!set) {
    return <div className="container"><p>Set not found</p></div>;
  }

  const { totalOriginal, setPrice, totalIndividual, effectiveDiscount, items, freeIds, overrides } = getSetPricing(set);
  const images = getSetImages(set);
  const parsedIndex = imageIndex?.match(/^i(\d+)$/)?.[1];
  const imgIdx = parsedIndex ? Math.max(0, Math.min(parseInt(parsedIndex, 10) - 1, images.length - 1)) : 0;
  const lightboxOpen = !!imageIndex;
  const setUrl = `https://portugal-sale.kostanos.com/set/${set.id}?lang=${lang}`;
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t.waMessage + setUrl)}`;
  const mailSubject = encodeURIComponent(set.title[lang]);
  const mailBody = encodeURIComponent(`${t.waMessage}${setUrl}`);

  return (
    <div className="container detail-page">
      <Link to={`/?${searchParams.toString()}`} className="back-link">
        &larr; {t.backToList}
      </Link>

      <div className="detail-layout">
        <Gallery
          images={images}
          alt={set.title[lang]}
          itemId={set.id}
          initialIndex={imgIdx}
          lightbox={lightboxOpen}
          searchParams={searchParams.toString()}
          basePath="/set"
        />

        <div className="detail-info">
          <div className="detail-badges">
            <span className="badge set-discount-badge">-{effectiveDiscount}%</span>
          </div>

          <h1 className="detail-title">{set.title[lang]}</h1>

          <PriceBadge price={setPrice} originalPrice={totalOriginal} detailed />

          {totalIndividual > setPrice && (
            <p className="set-vs-individual">
              &euro;{totalIndividual - setPrice} {t.setSavingsVsIndividual} (&euro;{totalIndividual})
            </p>
          )}

          <div className="detail-desc">
            <Markdown components={{ a: ({ children, href }) => <a href={href} target="_blank" rel="noopener noreferrer">{children}</a> }}>
              {set.desc[lang]}
            </Markdown>
          </div>

          <h2 className="set-items-title">{t.setItemsIncluded}</h2>
          <div className="set-items-list">
            {items.map(item => {
              const isFree = freeIds.has(item.id);
              return (
                <Link key={item.id} to={`/item/${item.id}?${searchParams.toString()}`} className={`set-item-row ${isFree ? 'set-item-free' : ''}`}>
                  <img src={item.images[0]} alt={item.title[lang]} className="set-item-thumb" />
                  <div className="set-item-info">
                    <span className="set-item-title">
                      {item.title[lang]}
                      {isFree && <span className="badge gift-badge set-free-badge">{t.freeGift}</span>}
                    </span>
                    <span className="set-item-price">
                      {isFree ? (
                        <><s>&euro;{item.originalPrice}</s> <strong className="set-item-free-label">&euro;0</strong></>
                      ) : (
                        <>{`€${Math.round((item.originalPrice ?? 0) * (1 - (overrides[item.id] ?? set.discountPercent) / 100))}`}
                        {item.originalPrice !== null && <s className="set-item-original">&euro;{item.originalPrice}</s>}</>
                      )}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="set-total-bar">
            <div className="set-total-line">
              <span>{t.setPrice}</span>
              <strong>&euro;{setPrice}</strong>
            </div>
            <div className="set-total-original">
              <s>&euro;{totalOriginal}</s>
              <span className="discount-badge">-{effectiveDiscount}%</span>
            </div>
          </div>

          <div className="detail-actions">
            <a href={`mailto:${CONTACT_EMAIL}?subject=${mailSubject}&body=${mailBody}`} className="btn btn-email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              {t.contactBtn}
            </a>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              {t.whatsapp}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
