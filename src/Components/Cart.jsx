import { BsCartXFill } from "react-icons/bs";

const Cart = () => {
  return (
    <div className=" flex flex-col w-full h-[85vh] justify-center items-center gap-3">
      <BsCartXFill className=" text-9xl text-orange-600"></BsCartXFill>
      <p className=" text-2xl">Your cart is empty</p>
      <p className=" pb-6 text-lg">You can go to home page to view more restaurants</p>

      <button className=" p-3 text-xl bg-green-600 text-white">See restaurants near you</button>
    </div>
  );
};

export default Cart;
