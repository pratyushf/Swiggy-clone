import swiggy from "../assets/Swig.svg";

const Footer = () => {
  return (
    <footer className=" py-4 w-screen flex-col bg-gray-200 items-center justify-center">
      <div className="flex gap-3 justify-center p-5 items-center">
        <p className="text-xl font-bold text-gray-600">
          For better experience, download the Swiggy app now
        </p>
        <img
          className="h-20 cursor-pointer"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
          alt="Google play"
        />
        <img
          className="h-20 cursor-pointer"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
          alt="App Store"
        />
      </div>
      <div className="flex items-center justify-around p-3">
        <div className="flex-col">
          <img src={swiggy} className="h-20" alt="logo" />
          <p className="text-center">© 2025 Swiggy Limited</p>
        </div>
        <div className=" flex gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-lg font-semibold text-black">Company</p>
            <p className="text-gray-500 cursor-pointer">About Us</p>
            <p className="text-gray-500 cursor-pointer">Swiggy Corporate</p>
            <p className="text-gray-500 cursor-pointer">Careers</p>
            <p className="text-gray-500 cursor-pointer">Team</p>
            <p className="text-gray-500 cursor-pointer">Swiggy One</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-lg font-semibold text-black">Contact us</p>
            <p className="text-gray-500 cursor-pointer">Help & Support</p>
            <p className="text-gray-500 cursor-pointer">Partner with us</p>
            <p className="text-gray-500 cursor-pointer">Ride with us</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-lg font-semibold text-black">Available in:</p>
            <p className="text-green-800">Bangalore</p>
            <p className="text-gray-500 cursor-pointer">Gurgaon</p>
            <p className="text-gray-500 cursor-pointer">Hyderabad</p>
            <p className="text-gray-500 cursor-pointer">Delhi</p>
            <p className="text-gray-500 cursor-pointer">Mumbai</p>
            <p className="text-gray-500 cursor-pointer">Pune</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
