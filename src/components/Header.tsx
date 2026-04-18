import { useLang } from "../hooks/useLang";
import type { Lang } from "../data/items";

const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "uk", label: "UA" },
  { code: "pt", label: "PT" },
];

export function Header() {
  const { lang, setLang, t } = useLang();

  return (
    <header className="header">
      <div className="header-inner">
        <a href="/" className="header-title">{t.siteTitle}</a>
        <div className="lang-switcher">
          {LANGS.map(l => (
            <button
              key={l.code}
              className={`lang-btn ${lang === l.code ? "active" : ""}`}
              onClick={() => setLang(l.code, true)}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
