import { ITEMS } from "../data/items";
import { SETS } from "../data/sets";
import { ItemCard } from "./ItemCard";
import { SetCard } from "./SetCard";

export function ItemGrid() {
  return (
    <div className="item-grid">
      {SETS.map(set => (
        <SetCard key={set.id} set={set} />
      ))}
      {ITEMS.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
