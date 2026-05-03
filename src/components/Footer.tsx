import { useLang } from "../hooks/useLang";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-link">{t.statusSold}</span>
      </div>
    </footer>
  );
}
