import { useLang } from "../hooks/useLang";
import { GMAPS_URL } from "../constants";

export function LocationBadge({ delivery }: { delivery: "local" | "malaga" }) {
  const { t } = useLang();

  return (
    <div className="location-badge">
      <a href={GMAPS_URL} target="_blank" rel="noopener noreferrer" className="location-link">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        {t.pickupAt} Oleiros
      </a>
      <span className="delivery-text delivery-local">{t.deliveryLocal}</span>
      {delivery === "malaga" && (
        <span className="delivery-text delivery-malaga">{t.deliveryMalaga}</span>
      )}
    </div>
  );
}
