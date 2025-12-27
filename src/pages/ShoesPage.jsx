import { shoes } from "@/test-data/data";
import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";


const ShoesPage = () => {


const [activeCategory, setActiveCategory] = useState(null)
const [displaySorted , setDisplaySorted] = useState("none")
const [inStock , setInStock] = useState("all")
const [selectedSize, setSelectedsize] = useState("all")
const [selectedBrand, setSelectedBrand] = useState("all")

 const getProcessedProducts = () => {
  let list = activeCategory ? shoes.filter( f => f.category === activeCategory) : [...shoes];


  if (selectedBrand !== "all") {
    list = list.filter(item => {
     return item.brand.toLowerCase() === selectedBrand.toLowerCase()
    })
  }




  if (selectedSize !== "all") {
    list = list.filter(item => {
      if (selectedSize === "small") {
        return item.sizes.some(s => s >= 36 && s <= 38)
      }
      if (selectedSize === "normal") {
        return item.sizes.some(s => s >= 39 && s <= 41)
      }
      if (selectedSize === "large") {
        return item.sizes.some(s => s >= 42 && s <= 44)
      }
      if (selectedSize === "extraLarge") {
        return item.sizes.some(s => s >= 45 && s <= 46)
      }
      return true
    })
  }
 

  if (inStock === "yes") {
    list = list.filter(item => item.inStock === true)
  } else if (inStock === "no") {
   list = list.filter(item => item.inStock === false)
  } 

   if (displaySorted === "lowToHigh") {
    return list.sort((a , b) => a.price - b.price)
  } else if (displaySorted === "highToLow") {
    return list.sort((a, b) => b.price - a.price)
  } 


  return list
}

const finalProducts = getProcessedProducts()


const filteredByCategory = (category) => {
  setActiveCategory(category)
}

const handleStock = (e) => setInStock(e.target.value)
const handleSort = (e) => setDisplaySorted(e.target.value)
const handleSize = (e) => setSelectedsize(e.target.value)
const handleBrand = (e) => setSelectedBrand(e.target.value)


  return (
    <>
      {/* TITLE */}
      <div className="w-full h-24 flex items-center justify-center ">
        <h1 className="text-xl md:text-2xl font-bold">
          ფეხბურთის ფეხსაცმელები
        </h1>
      </div>

      {/* PAGE LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-6 px-4 lg:px-10 my-10 min-h-screen">
        
        {/* FILTER SIDEBAR */}
        <div className="bg-[#f1f1f1] rounded h-fit w-full lg:w-72">
          <div className="border-b border-[#aaaaaa6c] font-bold px-3 py-2">
            კატეგორიები
          </div>

          <ul className="flex flex-col text-md font-medium p-2">
            <li onClick={() =>  filteredByCategory("საფეხბურთო ფეხსაცმელები")  } className="cursor-pointer hover:bg-[#cac9c967] rounded px-2 py-2 active:bg-[#cac9c967]">
              ბუცები/შიპოვკები
            </li>
            <li onClick={() =>  filteredByCategory("სარბენი ფეხსაცმელები")}  className="cursor-pointer hover:bg-[#cac9c967] rounded px-2 py-2 active:bg-[#cac9c967]">
              სარბენი ფეხსაცმელები
            </li>

          </ul>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col flex-1">

          {/* FILTER BAR */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            
            <div className="flex flex-col items-center">
              <p className="mb-1 font-black text-sm">ბრენდი</p>
              <select className="w-full px-2 py-1.5 border rounded" onChange={handleBrand}>
                <option value="all">ყველა</option>

                <option value="nike">Nike</option>
                <option value="adidas">Adidas</option>
                <option value="puma">Puma</option>
              </select>
            </div>

            <div className="flex flex-col items-center">
              <p className="mb-1 font-black text-sm">ზომა</p>
              <select className="w-full px-2 py-1.5 border rounded" onChange={handleSize}>
                <option value="All">ყველა</option>
                <option value="small">36-38</option>
                <option value="normal">39-41</option>
                <option value="big">42-44</option>
                <option value="extra-big">45-46</option>

              </select>
            </div>

            <div className="flex flex-col items-center">
              <p className="mb-1 font-black text-sm">მარაგშია</p>
              <select className="w-full px-2 py-1.5 border rounded" onChange={handleStock}>
                <option value="all">ყველა</option>
                <option value="yes">კი</option>
                <option value="no">არა</option>
              </select>
            </div>

            <div className="flex flex-col items-center">
              <p className="mb-1 font-black text-sm">დალაგება</p>
              <select className="w-full px-2 py-1.5 border rounded" onChange={handleSort}>
                <option value="all">None</option>
                <option value="lowToHigh">ზრდადობით</option>
                <option value="highToLow">კლებადობით</option>
              </select>
            </div>

          </div>

          {/* PRODUCTS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
            {finalProducts.map((item) => (
              <div
                key={item.id}
                className="shadow-lg rounded-xl border relative bg-white w-full max-w-80"
              >
                <img
                  src={item.imgUrl}
                  alt={item.name}
                  className="w-full rounded-t-xl"
                />

                <div className="p-4">
                  <h1 className="font-bold text-md mb-1">{item.name}</h1>

                  <p className="text-sm">
                    ზომები:
                    <span className="font-extralight">
                      {" "}{item.sizes.join(", ")}
                    </span>
                  </p>

                  <span
                    className={`text-sm font-medium ${
                      item.inStock ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {item.inStock ? "მარაგშია" : "არ არის მარაგში"}
                  </span>

                  <div className="flex items-center justify-between mt-3">
                    <p className="font-bold text-lg">
                      {item.price.toFixed(2)}₾
                    </p>

                    <Link
                      to={`/product/${item.id}`}
                      className="bg-[#e4e4e4] px-3 py-1 rounded-full text-sm hover:opacity-80 active:opacity-80"
                    >
                      სრულად
                    </Link>
                  </div>

                  <button className="absolute top-2 right-2 hover:opacity-80 active:opacity-80 cursor-pointer">
                    <IoMdAddCircle size={36} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default ShoesPage;



