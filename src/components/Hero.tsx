import { useLang } from "../hooks/useLang";
import { GMAPS_URL, SITE_URL } from "../constants";

export function Hero() {
  const { lang, t } = useLang();

  const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${SITE_URL}?lang=${lang}`)}`;

  return (
    <section className="hero">
      <h1>{t.heroTitle}</h1>
      <p className="hero-desc">{t.heroDesc}</p>
      <div className="hero-actions">
        <a href={GMAPS_URL} target="_blank" rel="noopener noreferrer" className="hero-location">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          {t.location}
        </a>
        <a href={fbShareUrl} target="_blank" rel="noopener noreferrer" className="btn btn-facebook">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          {t.shareOnFb}
        </a>
      </div>
    </section>
  );
}
