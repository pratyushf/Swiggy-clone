import { PiShoppingBagThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import CartPayment from "./CartPayment";

const addressType = "Work";
const esTime = 35;

const CartAddress = () => {
  return (
    <div className=" m-8 p-9 w-2/3 bg-white h-fit">
      <p className=" font-bold text-2xl">Select Address</p>
      <p className=" text-lg">You have a saved address in this location</p>
      <div className=" flex gap-5 w-full">
        <div className=" bg-white flex gap-3 border border-gray-400 p-3 w-1/2 h-fit m-4">
          <div>
            <PiShoppingBagThin className=" text-4xl" />
          </div>
          <div>
            <p className=" text-lg font-semibold">{addressType}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, vitae omnis? Numquam amet praesentium officia sed
              maiores accusamus, voluptate.
            </p>
            <p className=" font-semibold">{esTime} mins</p>
            <button className=" cursor-pointer font-semibold my-2 rounded-lg p-2 bg-green-500 text-white">
              Use This
            </button>
          </div>
        </div>
        <div className=" bg-white flex gap-3 border border-gray-400 p-3  w-1/2 h-fit m-4">
          <div>
            <CiLocationOn className=" text-4xl" />
          </div>

          <div>
            <p className=" text-lg font-semibold">{addressType}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, vitae omnis? Numquam amet praesentium officia sed
              maiores accusamus, voluptate.
            </p>
            <button className=" font-semibold my-2 rounded-lg mt-6 p-2 text-green-500 bg-white border border-green-500 cursor-pointer">
              Add New
            </button>
          </div>
        </div>
      </div>
      <div className=" mt-10 w-full flex justify-center">
        <CartPayment />
      </div>
    </div>
  );
};

export default CartAddress;
