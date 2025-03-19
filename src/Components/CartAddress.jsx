import { PiShoppingBagThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import CartPayment from "./CartPayment";

const addressType = "Work";
const esTime = 35;

const CartAddress = () => {
  return (
    <div className="m-4 md:m-8 p-6 md:p-9 md:w-2/3 bg-white w-fit h-fit shadow-md rounded-lg">
      <p className="font-bold text-2xl">Select Address</p>
      <p className="text-lg text-gray-600">You have a saved address in this location</p>
      
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        {/* Saved Address */}
        <div className="bg-white flex gap-4 border border-gray-300 p-4 w-full md:w-1/2 rounded-lg shadow-sm">
          <PiShoppingBagThin className="text-4xl text-gray-700" />
          <div>
            <p className="text-lg font-semibold text-gray-800">{addressType}</p>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, vitae omnis? 
              Numquam amet praesentium officia sed maiores accusamus, voluptate.
            </p>
            <p className="font-semibold text-green-600 mt-2">{esTime} mins</p>
            <button className="mt-3 w-full md:w-auto px-4 py-2 font-semibold rounded-lg bg-green-500 text-white hover:bg-green-600 transition">
              Use This
            </button>
          </div>
        </div>
        
        {/* Add New Address */}
        <div className="bg-white flex gap-4 border border-gray-300 p-4 w-full md:w-1/2 rounded-lg shadow-sm">
          <CiLocationOn className="text-4xl text-gray-700" />
          <div>
            <p className="text-lg font-semibold text-gray-800">Add New Address</p>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, vitae omnis? 
              Numquam amet praesentium officia sed maiores accusamus, voluptate.
            </p>
            <button className="mt-3 w-full md:w-auto px-4 py-2 font-semibold text-green-500 border border-green-500 rounded-lg hover:bg-green-50 transition">
              Add New
            </button>
          </div>
        </div>
      </div>

      {/* Payment Section */}
      <div className="mt-10 w-full flex justify-center">
        <CartPayment />
      </div>
    </div>
  );
};


export default CartAddress;
