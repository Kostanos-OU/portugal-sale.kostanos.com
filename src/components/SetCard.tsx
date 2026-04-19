import { Link, useSearchParams } from "react-router-dom";
import { useLang } from "../hooks/useLang";
import type { ItemSet } from "../data/sets";
import { getSetPricing, getSetImages } from "../data/sets";

export function SetCard({ set }: { set: ItemSet }) {
  const { lang, t } = useLang();
  const [searchParams] = useSearchParams();
  const { totalOriginal, setPrice, effectiveDiscount, items } = getSetPricing(set);
  const images = getSetImages(set);

  return (
    <Link to={`/set/${set.id}?${searchParams.toString()}`} className="item-card set-card">
      <div className="card-image-wrap">
        <img src={images[0]} alt={set.title[lang]} className="card-image" loading="lazy" />
        <span className="photo-count">{images.length} {t.photos}</span>
        <span className="badge status-badge status-available">{t.setBadge}</span>
      </div>
      <div className="card-body">
        <div className="card-badges">
          <span className="badge set-discount-badge">-{effectiveDiscount}%</span>
        </div>
        <h3 className="card-title">{set.title[lang]}</h3>
        <span className="price-compact">
          <s className="price-old">&euro;{totalOriginal}</s>
          <span className="price-current">&euro;{setPrice}</span>
          <span className="discount-badge">-{effectiveDiscount}%</span>
        </span>
        <p className="card-desc"><strong>{items.length} {t.setItemsCount}</strong> — {set.shortDesc[lang]}</p>
      </div>
    </Link>
  );
}
