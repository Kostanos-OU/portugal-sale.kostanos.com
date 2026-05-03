import { useParams, Link, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import Markdown from "react-markdown";
import { useLang } from "../hooks/useLang";
import { SETS, getSetPricing, getSetImages } from "../data/sets";
import { Gallery } from "./Gallery";
import { PriceBadge } from "./PriceBadge";

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

        </div>
      </div>
    </div>
  );
}
