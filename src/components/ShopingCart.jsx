import { useEffect, useRef } from "react";
import { useShoppingCart } from "../context/ShopingCartContext";
import CartItem from "./CartItem";

function ShopingCart() {
  const { isOpen, closeCart, cartItems } = useShoppingCart();
  const ref = useRef(null);

  useEffect(
    function () {
      function handleOutsideClick(e) {
        if (!ref.current.contains(e.target)) {
          closeCart();
        }
      }
      document.addEventListener("mousedown", handleOutsideClick);

      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    },
    [closeCart]
  );

  return (
    <div
      ref={ref}
      hidden={!isOpen}
      className="fixed top-0 right-0 bg-white shadow-xl sm:w-2/3 md:w-1/2 lg:w-2/5 h-full w-2/3 z-9999 px-4 "
    >
      <div className="flex justify-between align-middle p-3">
        <span className="font-bold text-xl ">Cart</span>
        <button
          onClick={closeCart}
          className="bg-red-500 text-white rounded py-1 mr-2 px-2 font-bold"
        >
          Close
        </button>
      </div>

      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default ShopingCart;
