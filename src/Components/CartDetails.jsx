import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../utils/cartSlice";

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
    <div className="m-4 md:m-8 p-6 md:p-8 w-fit md:w-1/3 bg-white flex flex-col gap-6 shadow-lg rounded-lg border border-gray-300">
      <h2 className="text-xl font-semibold text-gray-800">Your Cart</h2>

      <div className="max-h-[40vh] overflow-y-auto pr-2">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-2 justify-between items-center p-4 shadow-sm rounded-lg border border-gray-300 bg-white mb-3"
            >
              <p className="font-semibold text-gray-800">{item.name}</p>

              <div className="flex items-center gap-4 border border-orange-500 rounded-lg px-4 py-1 bg-gray-50 w-28 justify-center">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className=" cursor-pointer text-xl font-bold text-red-500 px-2 transition-all hover:bg-red-100 rounded-lg"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className=" cursor-pointer text-xl font-bold text-green-600 px-2 transition-all hover:bg-green-100 rounded-lg"
                >
                  +
                </button>
              </div>

              <p className="font-semibold text-gray-800 text-md">
                ₹{(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="border-t border-gray-300 pt-4">
          <h3 className="text-md font-semibold text-gray-700">Bill Details</h3>

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
            <button className=" cursor-pointer text-green-500 underline hover:text-green-700">
              Add Tip
            </button>
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
