import { useLang } from "../hooks/useLang";

interface Props {
  price: number | null;
  originalPrice: number | null;
  detailed?: boolean;
}

export function PriceBadge({ price, originalPrice, detailed }: Props) {
  const { t } = useLang();

  if (price === null && originalPrice === null) {
    return <span className="price price-ask">&euro;___</span>;
  }

  if (price !== null && originalPrice === null) {
    return <span className="price">&euro;{price}</span>;
  }

  if (price !== null && originalPrice !== null) {
    const discount = Math.round(((originalPrice - price) / originalPrice) * 100);
    const saved = originalPrice - price;

    if (detailed) {
      return (
        <div className="price-block">
          <div className="price-original-line">
            {t.priceOriginal} <s>&euro;{originalPrice}</s>
          </div>
          <div className="price-now-line">
            {t.priceNow} <strong className="price-current">&euro;{price}</strong>
          </div>
          <div className="price-save">
            {t.youSave} &euro;{saved}! <span className="discount-badge">-{discount}%</span>
          </div>
        </div>
      );
    }

    return (
      <span className="price-compact">
        <s className="price-old">&euro;{originalPrice}</s>
        <span className="price-current">&euro;{price}</span>
        <span className="discount-badge">-{discount}%</span>
      </span>
    );
  }

  return <span className="price">&euro;{originalPrice}</span>;
}
