import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { FaBasketShopping } from "react-icons/fa6";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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

            <div>
              {/* არჩეული პროდუქტები აქ */}
              <h1 className="text-center text-2xl text-white">
                კალათა ცარიელია...
              </h1>
            </div>
          </div>
        </>
      )}
    </header>
    
  );
}

export default Navbar;
