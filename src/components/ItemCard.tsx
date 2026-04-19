import { Link, useSearchParams } from "react-router-dom";
import { useLang } from "../hooks/useLang";
import { PriceBadge } from "./PriceBadge";
import { ConditionBadge } from "./ConditionBadge";
import { LocationBadge } from "./LocationBadge";
import type { Item } from "../data/items";

const STATUS_CLS = {
  available: "status-available",
  reserved: "status-reserved",
  sold: "status-sold",
};

export function ItemCard({ item }: { item: Item }) {
  const { lang, t } = useLang();
  const [searchParams] = useSearchParams();
  const statusKey = `status${item.status.charAt(0).toUpperCase() + item.status.slice(1)}` as keyof typeof t;

  return (
    <Link to={`/item/${item.id}?${searchParams.toString()}`} className="item-card">
      <div className="card-image-wrap">
        <img src={item.images[0]} alt={item.title[lang]} className="card-image" loading="lazy" />
        {item.images.length > 1 && (
          <span className="photo-count">{item.images.length} {t.photos}</span>
        )}
        <span className={`badge status-badge ${STATUS_CLS[item.status]}`}>{t[statusKey]}</span>
      </div>
      <div className="card-body">
        <div className="card-badges">
          <ConditionBadge condition={item.condition} />
          {item.freeGift && <span className="badge gift-badge">{t.freeGift}</span>}
        </div>
        <h3 className="card-title">{item.title[lang]}</h3>
        <PriceBadge price={item.price} originalPrice={item.originalPrice} />
        <p className="card-desc">{item.shortDesc[lang]}</p>
        <LocationBadge delivery={item.delivery} />
      </div>
    </Link>
  );
}
