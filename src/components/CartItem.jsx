import { useShoppingCart } from "../context/ShopingCartContext";
import StoreItems from "../data/items.json";
import { formatCurrency } from "../utils/formatCurrency";

function CartItem({ id, quantity }) {
  const { removeFromCart } = useShoppingCart();
  const item = StoreItems.find((item) => item.id === id);
  if (item === null) return null;

  return (
    <div className="flex gap-2 p-2 m-1 justify-between bg-green-50">
      <div className="flex gap-2">
        <img
          src={item.imgUrl}
          alt=""
          className="w-[125px] h-[75px] object-cover "
        />
        <div className="flex flex-col justify-center ">
          <h3>
            {item.name} x{quantity}
          </h3>
          <p>{formatCurrency(item.price)}</p>
        </div>
      </div>

      <div className="flex items-center ">
        <p className="font-bold">{formatCurrency(item.price * quantity)}</p>
      </div>
    </div>
  );
}

export default CartItem;
