import type { Lang } from "./items";
import { ITEMS } from "./items";

export interface ItemSet {
  id: string;
  itemIds: string[];
  freeItemIds?: string[];
  discountPercent: number;
  itemDiscountOverrides?: Record<string, number>;
  images: string[];
  title: Record<Lang, string>;
  shortDesc: Record<Lang, string>;
  desc: Record<Lang, string>;
}

export const SETS: ItemSet[] = [
  {
    id: "makita-set",
    itemIds: ["drill", "circular-saw", "string-trimmer", "angle-grinder", "multi-tool", "router-trimmer", "jigsaw-pin-nailer", "batteries-charger", "heat-gun", "router-bits", "saw-blades", "tool-kit"],
    freeItemIds: ["heat-gun", "router-bits", "saw-blades", "tool-kit"],
    discountPercent: 40,
    images: ["/images/set-makita.webp"],
    title: { en: "Complete Makita Power Tool Set", es: "Set Completo Herramientas Makita", uk: "Повний набір інструментів Makita", pt: "Conjunto Completo Ferramentas Makita" },
    shortDesc: { en: "All Makita 18V tools + batteries + charger + free accessories. Buy together and save big!", es: "Todas las herramientas Makita 18V + baterías + cargador + accesorios gratis. ¡Compra junto y ahorra!", uk: "Всі інструменти Makita 18V + акумулятори + зарядний + аксесуари безкоштовно. Купуйте разом!", pt: "Todas as ferramentas Makita 18V + baterias + carregador + acessórios grátis. Compre junto e poupe!" },
    desc: { en: "Why buy one tool when you can have them all? Get the **complete Makita 18V ecosystem** — 8 power tools at **40% off** original prices, plus **4 accessories completely free**.\n\nOne battery platform, endless possibilities. Every tool shares the same **18V LXT batteries** — no extra chargers, no compatibility headaches. From drilling to cutting, grinding to routing — you're covered for any project.\n\nAll tools are in **perfect condition**, barely used, most still under warranty from Amazon.es (purchased December 2025).", es: "¿Por qué comprar una herramienta cuando puedes tenerlas todas? Llévate el **ecosistema completo Makita 18V** — 8 herramientas con **40% de descuento** sobre el precio original, más **4 accesorios completamente gratis**.\n\nUna plataforma de batería, posibilidades infinitas. Todas las herramientas comparten las mismas **baterías 18V LXT** — sin cargadores extra, sin problemas de compatibilidad. Desde taladrar hasta cortar, esmerilar hasta fresar — cubierto para cualquier proyecto.\n\nTodas las herramientas en **estado perfecto**, apenas usadas, la mayoría aún en garantía de Amazon.es (compradas en diciembre 2025).", uk: "Навіщо купувати один інструмент, коли можна мати всі? Отримайте **повну екосистему Makita 18V** — 8 електроінструментів зі **знижкою 40%**, плюс **4 аксесуари абсолютно безкоштовно**.\n\nОдна платформа акумуляторів, безмежні можливості. Всі інструменти використовують одні й ті ж **акумулятори 18V LXT** — без додаткових зарядних, без проблем сумісності. Від свердління до різання, шліфування до фрезерування — ви готові до будь-якого проекту.\n\nВсі інструменти в **ідеальному стані**, майже не використовувались, більшість ще на гарантії від Amazon.es (придбано грудень 2025).", pt: "Porquê comprar uma ferramenta quando pode ter todas? Leve o **ecossistema completo Makita 18V** — 8 ferramentas com **40% de desconto**, mais **4 acessórios completamente grátis**.\n\nUma plataforma de bateria, possibilidades infinitas. Todas as ferramentas partilham as mesmas **baterias 18V LXT** — sem carregadores extra, sem problemas de compatibilidade. De furar a cortar, esmerilhar a fresar — preparado para qualquer projeto.\n\nTodas as ferramentas em **estado perfeito**, pouco usadas, a maioria ainda em garantia da Amazon.es (compradas em dezembro 2025)." }
  },
  {
    id: "garden-set",
    itemIds: ["string-trimmer", "loppers", "axe", "shovel"],
    discountPercent: 40,
    itemDiscountOverrides: { "string-trimmer": 35 },
    images: ["/images/set-garden.webp"],
    title: { en: "Complete Garden Tool Set", es: "Set Completo Herramientas de Jardín", uk: "Повний набір садових інструментів", pt: "Conjunto Completo Ferramentas de Jardim" },
    shortDesc: { en: "Trimmer + loppers + splitting axe + shovel. Everything for your garden at 40% off!", es: "Desbrozadora + tijera de poda + hacha + pala. ¡Todo para tu jardín con 40% de descuento!", uk: "Тример + сучкоріз + сокира + лопата. Все для саду зі знижкою 40%!", pt: "Roçadora + tesoura de poda + machado + pá. Tudo para o jardim com 40% de desconto!" },
    desc: { en: "Everything you need to tame your land — **one set, one price, 40% off.**\n\nWhether you're clearing overgrown brush, pruning fruit trees, splitting firewood, or digging in the garden — this set has you covered from day one.\n\nThe Makita trimmer alone will pay for itself on the first use if you have land in Portugal.", es: "Todo lo que necesitas para domar tu terreno — **un set, un precio, 40% de descuento.**\n\nYa sea limpiando maleza, podando frutales, partiendo leña o cavando en el jardín — este set te cubre desde el primer día.\n\nSolo la desbrozadora Makita se paga sola en el primer uso si tienes terreno en Portugal.", uk: "Все необхідне для догляду за ділянкою — **один набір, одна ціна, знижка 40%.**\n\nЧи то розчищення зарослів, обрізка фруктових дерев, колення дров або копання в саду — цей набір покриває все з першого дня.\n\nСам тример Makita окупиться з першого використання, якщо у вас є земля в Португалії.", pt: "Tudo o que precisa para domar o seu terreno — **um conjunto, um preço, 40% de desconto.**\n\nSeja a limpar vegetação, podar árvores de fruto, rachar lenha ou cavar no jardim — este conjunto cobre tudo desde o primeiro dia.\n\nSó a roçadora Makita paga-se no primeiro uso se tiver terreno em Portugal." }
  },
  {
    id: "wood-deck-set",
    itemIds: ["wood-planks", "deck-tiles"],
    discountPercent: 50,
    images: ["/images/set-wood-deck.webp"],
    title: { en: "Wood & Deck Complete Set", es: "Set Completo Madera y Deck", uk: "Повний набір дерево та декінг", pt: "Conjunto Completo Madeira e Deck" },
    shortDesc: { en: "Thermotreated pine boards + acacia deck tiles. Buy together at 50% off!", es: "Tablas de pino termotratado + baldosas deck acacia. ¡Juntos con 50% de descuento!", uk: "Термооброблені соснові дошки + плитка з акації. Разом зі знижкою 50%!", pt: "Tábuas de pinho termotratado + ladrilhos deck acácia. Juntos com 50% de desconto!" },
    desc: { en: "Transform your outdoor space in one go. **Thermotreated pine** for the structure and **acacia deck tiles** for the finish — everything you need for a deck, patio, or terrace project.\n\n**50% off** the combined original price when you buy both together.", es: "Transforma tu espacio exterior de una vez. **Pino termotratado** para la estructura y **baldosas deck de acacia** para el acabado — todo lo que necesitas para un proyecto de deck, patio o terraza.\n\n**50% de descuento** sobre el precio original combinado al comprar ambos juntos.", uk: "Перетворіть зовнішній простір за один раз. **Термооброблена сосна** для конструкції та **плитка з акації** для покриття — все необхідне для проекту декінгу, патіо чи тераси.\n\n**Знижка 50%** від загальної оригінальної ціни при купівлі разом.", pt: "Transforme o seu espaço exterior de uma vez. **Pinho termotratado** para a estrutura e **ladrilhos deck de acácia** para o acabamento — tudo o que precisa para um projeto de deck, pátio ou terraço.\n\n**50% de desconto** sobre o preço original combinado ao comprar ambos juntos." }
  }
];

/** Compute set pricing from current item data */
export function getSetPricing(set: ItemSet) {
  const items = set.itemIds.map(id => ITEMS.find(i => i.id === id)).filter(Boolean) as NonNullable<ReturnType<typeof ITEMS.find>>[];
  const freeIds = new Set(set.freeItemIds ?? []);

  const totalOriginal = items.reduce((sum, item) => sum + (item.originalPrice ?? 0), 0);
  const overrides = set.itemDiscountOverrides ?? {};
  const setPrice = items.reduce((sum, item) => {
    if (freeIds.has(item.id)) return sum; // free items = €0
    const discount = overrides[item.id] ?? set.discountPercent;
    return sum + Math.round((item.originalPrice ?? 0) * (1 - discount / 100));
  }, 0);
  const totalIndividual = items.reduce((sum, item) => sum + (item.price ?? 0), 0);
  const effectiveDiscount = totalOriginal > 0 ? Math.round(((totalOriginal - setPrice) / totalOriginal) * 100) : 0;

  return { totalOriginal, setPrice, totalIndividual, effectiveDiscount, items, freeIds, overrides };
}

/** Get images for set: composite first, then first image from each item */
export function getSetImages(set: ItemSet): string[] {
  const items = set.itemIds.map(id => ITEMS.find(i => i.id === id)).filter(Boolean);
  const itemImages = items.map(item => item!.images[0]);
  return [...set.images, ...itemImages];
}

/** Get all sets that contain a given item ID */
export function getSetsForItem(itemId: string): ItemSet[] {
  return SETS.filter(s => s.itemIds.includes(itemId));
}
