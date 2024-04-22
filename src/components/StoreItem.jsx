import { useShoppingCart } from "../context/ShopingCartContext";
import { formatCurrency } from "../utils/formatCurrency";

function StoreItem({ id, name, price, imgUrl }) {
  const {
    getItemQuantity,
    increaseItemQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);
  return (
    <div className="h-full ">
      <img
        src={imgUrl}
        alt=""
        className="object-cover lg:h-[300px] lg:w-[400px] h-[200px] w-[300px]"
      />
      <div className="flex flex-col "></div>
      <div className="flex px-2 justify-between align-baseline py-2">
        <span className="text-lg font-bold">{name}</span>
        <span className="ml-3 text-slate-500">{formatCurrency(price)}</span>
      </div>
      <div className="mt-auto px-1 flex justify-center py-2">
        {quantity === 0 ? (
          <button onClick={()=> increaseItemQuantity(id)} className="bg-yellow-400 px-2 py-1 w-full rounded font-bold text-slate-700">
            +Add to cart
          </button>
        ) : (
          <div className="flex flex-col ">
            <div className="flex mb-2">
              <button onClick={()=> decreaseCartQuantity(id)} className="bg-yellow-400 px-3 rounded hover:bg-yellow-300 ">
                -
              </button>
              <span className="mx-2">{quantity} in cart</span>
              <button onClick={()=> increaseItemQuantity(id)} className="bg-yellow-400 px-3 rounded hover:bg-yellow-300">
                +
              </button>
            </div>
            <button onClick={() => removeFromCart(id) } className="py-1 px-2 rounded  font-bold  text-slate-50 bg-red-800 hover:bg-red-600 ">
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default StoreItem;
