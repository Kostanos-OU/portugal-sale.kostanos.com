import { useLang } from "../hooks/useLang";

const COND_MAP = {
  new: { key: "condNew" as const, cls: "cond-new" },
  almost_new: { key: "condAlmostNew" as const, cls: "cond-almost-new" },
  perfect: { key: "condPerfect" as const, cls: "cond-perfect" },
  good: { key: "condGood" as const, cls: "cond-good" },
};

export function ConditionBadge({ condition }: { condition: keyof typeof COND_MAP }) {
  const { t } = useLang();
  const { key, cls } = COND_MAP[condition];
  return <span className={`badge ${cls}`}>{t[key]}</span>;
}
