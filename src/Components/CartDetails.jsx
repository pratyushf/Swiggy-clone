import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../utils/cartSlice";

const CartDetails = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const itemTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryFee = 35;
  const platformFee = 10.0;
  const gstCharges = (itemTotal * 0.18).toFixed(2);
  const toPay = (
    itemTotal +
    deliveryFee +
    platformFee +
    parseFloat(gstCharges)
  ).toFixed(2);

  return (
    <div className="h-fit m-8 p-8 w-1/3 bg-white flex flex-col gap-5 shadow-lg rounded-lg border border-gray-300">
      <h2 className="text-2xl font-semibold text-gray-800">Your Cart</h2>
      <div className="max-h-[40vh] overflow-y-auto pr-2">
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="w-full flex justify-between items-center p-4 shadow-sm rounded-xl border border-gray-300 gap-3 bg-white mb-2"
            >
              <p className="font-semibold text-gray-800 px-3 py-1 rounded-md">
                {item.name}
              </p>

              <div className="flex items-center gap-4 border border-green-500 rounded-lg px-4 py-1 bg-gray-50 w-30 justify-center">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className=" cursor-pointer text-xl font-bold text-green-600 px-3 transition-all hover:bg-green-100 rounded-lg"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className=" cursor-pointer text-xl font-bold text-green-600 px-3 transition-all hover:bg-green-100 rounded-lg"
                >
                  +
                </button>
              </div>

              <p className="font-semibold text-gray-800 text-lg">
                ₹{(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="border-t border-gray-300 pt-4">
          <h3 className="text-lg font-semibold text-gray-700">Bill Details</h3>

          <div className="flex justify-between text-gray-700 mt-2">
            <p>Item Total</p>
            <p>₹{itemTotal.toFixed(2)}</p>
          </div>

          <div className="flex justify-between text-gray-700 mt-2">
            <p>Delivery Fee | 2.0 kms</p>
            <p>₹{deliveryFee}</p>
          </div>

          <div className="flex justify-between text-gray-700 mt-2">
            <p>Platform Fee</p>
            <p>₹{platformFee.toFixed(2)}</p>
          </div>

          <div className="flex justify-between text-gray-700 mt-2">
            <p>GST and Restaurant Charges</p>
            <p>₹{gstCharges}</p>
          </div>

          <div className="flex justify-between items-center text-gray-700 mt-4">
            <p>Delivery Tip</p>
            <button className="text-green-500 underline">Add Tip</button>
          </div>

          <div className="border-t border-gray-300 mt-4 pt-2 flex justify-between font-semibold text-lg text-gray-800">
            <p>TO PAY</p>
            <p>₹{toPay}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDetails;
