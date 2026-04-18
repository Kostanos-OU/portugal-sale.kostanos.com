import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { useSearchParams } from "react-router-dom";
import { T } from "../data/translations";
import type { Lang } from "../data/items";

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang, explicit?: boolean) => void;
  t: typeof T.en;
}

const LangContext = createContext<LangContextType>(null!);

const VALID_LANGS: Lang[] = ["en", "es", "uk", "pt"];

function detectLang(): Lang {
  for (const l of navigator.languages) {
    const code = l.substring(0, 2).toLowerCase();
    if (code === "uk" || code === "ua") return "uk";
    if (VALID_LANGS.includes(code as Lang)) return code as Lang;
  }
  return "pt";
}

function getInitialLang(searchParams: URLSearchParams): Lang {
  const urlLang = searchParams.get("lang");
  if (urlLang && VALID_LANGS.includes(urlLang as Lang)) return urlLang as Lang;

  const stored = localStorage.getItem("lang");
  if (stored && VALID_LANGS.includes(stored as Lang)) return stored as Lang;

  return detectLang();
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [lang, setLangState] = useState<Lang>(() => getInitialLang(searchParams));

  const setLang = useCallback((newLang: Lang, explicit = false) => {
    setLangState(newLang);
    if (explicit) {
      localStorage.setItem("lang", newLang);
    }
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      next.set("lang", newLang);
      return next;
    }, { replace: true });
  }, [setSearchParams]);

  useEffect(() => {
    const urlLang = searchParams.get("lang");
    if (urlLang && VALID_LANGS.includes(urlLang as Lang) && urlLang !== lang) {
      setLangState(urlLang as Lang);
    }
  }, [searchParams, lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: T[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
