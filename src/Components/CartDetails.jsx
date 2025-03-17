import { PiTriangleFill } from "react-icons/pi";
import { FaCircleStop } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";

const count = 1;

const CartDetails = () => {
  return (
    <div className="h-[100vh] m-8 p-8 w-1/3 bg-white flex flex-col gap-5">
      {/* Restaurant Info */}
      <div className="flex gap-3">
        <img
          className="w-20 h-20"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/aac7db02-8335-4755-ac41-31c203687558_203925.jpg"
          alt=""
        />
        <div className="border-b-3 h-fit">
          <p className="text-2xl font-semibold">Burger King</p>
          <p className="text-lg pb-4">Chinchwad</p>
        </div>
      </div>

      {/* Scrollable Cart Items Section */}
      <div className="max-h-[50vh] overflow-y-auto pr-2">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div
            key={index}
            className="w-full h-fit flex bg-white justify-between items-center p-3 shadow-md rounded-lg border border-gray-200 mb-2"
          >
            <PiTriangleFill className="text-green-500 text-xl" />
            <p className="font-semibold text-gray-800 flex-1 ml-2">
              Crispy Veg Burger
            </p>
            <div className="flex items-center gap-3 border border-green-500 rounded-lg px-3 py-1">
              <button className="cursor-pointer text-green-500 text-lg font-bold px-2">-</button>
              <span className="text-lg font-medium">{count}</span>
              <button className="cursor-pointer text-green-500 text-lg font-bold px-2">+</button>
            </div>
            <p className="font-semibold text-gray-700 ml-3">₹70</p>
          </div>
        ))}
      </div>

      {/* Apply Coupon */}
      <div className="cursor-pointer justify-center flex gap-4 items-center h-fit p-5 border-dotted border w-full bg-white">
        <BiSolidOffer className="text-green-500 text-2xl" />
        <p className="text-xl">Apply Coupon</p>
      </div>

      {/* Bill Details */}
      <div className="flex flex-col gap-3 mt-auto">
        <div className="flex justify-between">
          <p>Bill Details</p>
          <p>value</p>
        </div>
        <div className="flex justify-between">
          <p>Item Total</p>
          <p>value</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery Fee | 2.6 kms</p>
          <p>value</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery Tip</p>
          <p>value</p>
        </div>
        <div className="flex justify-between">
          <p>Platform fee</p>
          <p>value</p>
        </div>
        <div className="flex justify-between">
          <p>GST and Restaurant Charges</p>
          <p>value</p>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <p>TO PAY</p>
          <p>value</p>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
