import { useState } from "react";
import { useLang } from "../hooks/useLang";
import { FORMSPREE_ID } from "../constants";

interface Props {
  itemName: string;
  onClose: () => void;
}

export function ContactModal({ itemName, onClose }: Props) {
  const { t } = useLang();
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    setSent(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        {sent ? (
          <div className="modal-success">
            <h2>{t.successTitle}</h2>
            <p>{t.successDesc}</p>
          </div>
        ) : (
          <>
            <h2>{t.modalTitle}: {itemName}</h2>
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="item" value={itemName} />
              <label>{t.labelName}<input type="text" name="name" required /></label>
              <label>{t.labelEmail}<input type="email" name="email" required /></label>
              <label>{t.labelPhone}<input type="tel" name="phone" /></label>
              <label>{t.labelMessage}<textarea name="message" rows={4} required /></label>
              <button type="submit" className="btn btn-email">{t.sendBtn}</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
