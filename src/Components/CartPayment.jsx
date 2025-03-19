const CartPayment = () => {
  return (
    <div className=" w-[96%] h-fit p-5 bg-white flex flex-col gap-7">
      <p className=" text-black font-bold text-2xl">Choose payment method</p>
      <button className=" cursor-pointer w-full bg-green-500 text-xl text-white py-2 font-semibold">Proceed To Pay</button>
    </div>
  );
};

export default CartPayment;
