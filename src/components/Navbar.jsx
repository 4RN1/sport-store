import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { FaBasketShopping } from "react-icons/fa6";



function Navbar() {
  return (
    <header className="w-full bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide"
        >
          SoccerShop
        </Link>

        {/* Links (hidden on small screens) */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-gray-300">მთავარი</Link>
          <Link to="/soccer" className="hover:text-gray-300">ყველა კატეგორია</Link>
          <Link to="/category/jerseys" className="hover:text-gray-300">ფორმები</Link>
          <Link to="/category/shoes" className="hover:text-gray-300">ბუცები</Link>
          <Link to="/category/equipment" className="hover:text-gray-300">
            სპორტული ინვენტარი
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-5 text-lg">
          <span className="cursor-pointer hover:text-gray-300"><IoMdSearch/></span>
          <span className="cursor-pointer hover:text-gray-300"><MdAccountCircle/></span>
          <span className="cursor-pointer hover:text-gray-300"><FaBasketShopping/></span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
