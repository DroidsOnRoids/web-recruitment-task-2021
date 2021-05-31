import { CartItem } from "./CartItem";
import { Book } from "../../types";

interface CartItemsListProps {
  items: Book[];
  onRemoveItem: (isbn: string) => void;
}

export const CartItemsList = ({ items, onRemoveItem }: CartItemsListProps) => (
  <table className="table is-fullwidth is-hoverable cart_price">
    <thead>
      <tr>
        <th>Item name</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {items.map((item) => (
        <CartItem key={item.isbn} item={item} onRemove={onRemoveItem} />
      ))}
    </tbody>
  </table>
);
