import { ITEMS } from "../data/items";
import { ItemCard } from "./ItemCard";

export function ItemGrid() {
  return (
    <div className="item-grid">
      {ITEMS.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
