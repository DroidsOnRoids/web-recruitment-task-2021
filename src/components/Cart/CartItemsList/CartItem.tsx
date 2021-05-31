import { priceFormatter } from "../../../helpers";
import { Book } from "../../types";

interface CartItemProps {
  item: Book;
  onRemove: (isbn: string) => void;
}

export const CartItem = ({ item, onRemove }: CartItemProps) => {
  const { title, price, isbn } = item;
  const handleRemove = () => onRemove(isbn);

  return (
    <tr className="cart_price-row">
      <td>{title}</td>
      <td>{priceFormatter(price)}</td>
      <td>
        <button className="button is-danger is-inverted" onClick={handleRemove}>
          <span className="icon">
            <i className="fas fa-trash"></i>
          </span>
        </button>
      </td>
    </tr>
  );
};
