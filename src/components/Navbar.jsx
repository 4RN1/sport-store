import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { FaBasketShopping } from "react-icons/fa6";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { useCart } from "@/context/CartContext";



function Navbar() {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { cart, removeFromCart, totalPrice } = useCart();

  return (
    <header className="w-full bg-neutral-900 text-white">
      <div className="w-full mx-auto h-16 flex items-center justify-around">
        <TiThMenu size={30} onClick={() => setShowMenu(true)} className="md:hidden" />

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          SoccerShop
        </Link>

        {/* Links (hidden on small screens) */}
        <nav className="  hidden md:flex gap-1 text-xs md:gap-3  font-medium lg:text-sm">
          <Link to="/" className="hover:text-gray-300">
            მთავარი
          </Link>
          <Link to="/category" className="hover:text-gray-300">
            ყველა კატეგორია
          </Link>
          <Link to="/category/jerseys" className="hover:text-gray-300">
            ტანსაცმელი
          </Link>
          <Link to="/category/shoes" className="hover:text-gray-300">
            {" "}
            ფეხსაცმელები
          </Link>
          <Link to="/category/equipment" className="hover:text-gray-300">
            ინვენტარი
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-5 text-lg">
          <span className="cursor-pointer hover:text-gray-300">
            <IoMdSearch />
          </span>
          <span>
            <Link to="/login" className="cursor-pointer hover:text-gray-300">
              <MdAccountCircle />
            </Link>
          </span>
          <span
            className="cursor-pointer hover:text-gray-300"
            onClick={() => setShowCart(true)}
          >
            <FaBasketShopping />
          </span>
        </div>
      </div>

    

      {showMenu && (

        <>

        <div className="inset-0 bg-black/70 fixed" onClick={() => setShowMenu(false)}></div>
        <div className="fixed top-0 w-[70%] h-full z-50 text-black bg-white">

         
          <div className="my-3 mx-3 flex justify-end">
            <IoMdClose size={40} onClick={() => setShowMenu(false)} />
          </div>
          

          <nav className="flex flex-col gap-5  text-lg font-medium mx-5">
            <Link
              to="/"
              className="active:text-gray-600 active:bg-gray-400 p-1 rounded"
            >
              მთავარი
            </Link>
            <Link
              to="/category"
              className="active:text-gray-600 active:bg-gray-400 p-1 rounded"
            >
              ყველა კატეგორია
            </Link>
            <Link
              to="/category/jerseys"
              className="active:text-gray-600 active:bg-gray-400 p-1 rounded"
            >
              ტანსაცმელი
            </Link>
            <Link
              to="/category/shoes"
              className="active:text-gray-600 active:bg-gray-400 p-1 rounded"
            >
              {" "}
              ფეხსაცმელები
            </Link>
            <Link
              to="/category/equipment"
              className="active:text-gray-600 active:bg-gray-400 p-1 rounded"
            >
              ინვენტარი
            </Link>
            
          </nav>
          
        </div>
        </>
      )}


        {showCart && (
        <>
          {/* OVERLAY (behind cart) */}
          <div
            className="fixed inset-0 bg-black/70 z-40"
            onClick={() => setShowCart(false)}
          />

          {/* CART */}
          <div className={`fixed top-0 right-0 h-full w-0  md:w-120 bg-[#5f5f5f] z-50 py-5 ${showCart ? " transition duration-300 ease-in w-[80%]" : "w-0"} `}>
            <div className="flex justify-between mb-10 border-b pb-3">
              <h1 className="text-white text-2xl pl-5">საყიდლები</h1>
              <button
                className="text-2xl text-white pr-5 cursor-pointer"
                onClick={() => setShowCart(false)}
              >
                ✕
              </button>
            </div>

            <div className="px-5 space-y-4 overflow-y-auto h-[calc(100vh-160px)]">
  {cart.length === 0 ? (
    <h1 className="text-center text-xl text-white opacity-70">
      კალათა ცარიელია...
    </h1>
  ) : (
    cart.map((item) => (
      <div
        key={item.id}
        className="flex items-center justify-between bg-[#777] rounded p-3"
      >
        <div className="flex items-center gap-3">
          <img
            src={item.imgUrl}
            alt={item.name}
            className="w-14 h-14 rounded object-cover"
          />

          <div>
            <p className="text-white text-sm font-semibold">
              {item.name}
            </p>
            <p className="text-white text-xs opacity-80">
              {item.qty} × ${item.price}
            </p>
          </div>
        </div>

        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-700 text-lg cursor-pointer hover:text-red-500"
        >
          ✕
        </button>
      </div>
    ))
  )}
</div>
{cart.length > 0 && (
  <div className="absolute bottom-0 left-0 w-full border-t border-white/20 p-5 bg-[#5f5f5f]">
    <div className="flex justify-between text-white mb-4">
      <span className="font-semibold">ჯამი:</span>
      <span className="font-bold">${totalPrice.toFixed(2)}</span>
    </div>

    <button className="w-full bg-black text-white py-2 rounded">
      გადახდა
    </button>
  </div>
)}

          </div>
        </>
      )}
    </header>
    
  );
}

export default Navbar;
