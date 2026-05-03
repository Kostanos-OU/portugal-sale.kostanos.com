import { useParams, Link, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import Markdown from "react-markdown";
import { useLang } from "../hooks/useLang";
import { ITEMS } from "../data/items";
import { getSetsForItem, getSetPricing } from "../data/sets";
import { Gallery } from "./Gallery";
import { PriceBadge } from "./PriceBadge";
import { ConditionBadge } from "./ConditionBadge";
import { LocationBadge } from "./LocationBadge";

const STATUS_CLS = {
  available: "status-available",
  reserved: "status-reserved",
  sold: "status-sold",
};

export function ItemDetail() {
  const { id, imageIndex } = useParams<{ id: string; imageIndex?: string }>();
  const { lang, t } = useLang();
  const [searchParams] = useSearchParams();
  const item = ITEMS.find(i => i.id === id);

  // Parse image index from URL param like "i1", "i2", etc. (1-based)
  const parsedIndex = imageIndex?.match(/^i(\d+)$/)?.[1];
  const imgIdx = parsedIndex ? Math.max(0, Math.min(parseInt(parsedIndex, 10) - 1, (item?.images.length ?? 1) - 1)) : 0;
  const lightboxOpen = !!imageIndex;

  useEffect(() => {
    if (item) {
      document.title = `${item.title[lang]} — ${t.siteTitle}`;
    }
    return () => { document.title = t.siteTitle; };
  }, [item, lang, t]);

  if (!item) {
    return <div className="container"><p>Item not found</p></div>;
  }

  const statusKey = `status${item.status.charAt(0).toUpperCase() + item.status.slice(1)}` as keyof typeof t;

  return (
    <div className="container detail-page">
      <Link to={`/?${searchParams.toString()}`} className="back-link">
        &larr; {t.backToList}
      </Link>

      <div className="detail-layout">
        <Gallery
          images={item.images}
          alt={item.title[lang]}
          itemId={item.id}
          initialIndex={imgIdx}
          lightbox={lightboxOpen}
          searchParams={searchParams.toString()}
        />

        <div className="detail-info">
          <div className="detail-badges">
            <span className={`badge status-badge ${STATUS_CLS[item.status]}`}>{t[statusKey]}</span>
            <ConditionBadge condition={item.condition} />
          </div>

          <h1 className="detail-title">{item.title[lang]}</h1>

          <PriceBadge price={item.price} originalPrice={item.originalPrice} detailed />

          <LocationBadge delivery={item.delivery} />

          <div className="detail-desc">
            <Markdown components={{ a: ({ children, href }) => <a href={href} target="_blank" rel="noopener noreferrer">{children}</a> }}>
              {item.desc[lang]}
            </Markdown>
          </div>

          {getSetsForItem(item.id).map(set => {
            const { setPrice, totalOriginal, effectiveDiscount } = getSetPricing(set);
            return (
              <Link key={set.id} to={`/set/${set.id}?${searchParams.toString()}`} className="set-banner">
                <span className="set-banner-badge">{t.setBadge} -{effectiveDiscount}%</span>
                <span className="set-banner-title">{set.title[lang]}</span>
                <span className="set-banner-price"><s>&euro;{totalOriginal}</s> &euro;{setPrice}</span>
                <span className="set-banner-cta">{t.viewSet} &rarr;</span>
              </Link>
            );
          })}

        </div>
      </div>
    </div>
  );
}
