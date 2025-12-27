import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { allProduct } from "@/test-data/data";
import { FaBasketShopping } from "react-icons/fa6";
import { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
const ProductDetailPage = () => {
  const [active, setactive] = useState("description");

  const { id } = useParams();
  const navigate = useNavigate();
  const product = allProduct.find((p) => p.id === Number(id));

  if (!product)
    return (
      <div>
        <h1>პროდუქტი ვერ მოიძებნა :/</h1>
        <Link to="/">მთავარ გვერდზე დაბრუნდება</Link>
      </div>
    );

  return (
    <>
      <div className="grid grid-cols-1 my-20 mx-5 md:grid-cols-2 md:mx-25 md:gap-12.5 md:my-10 lg:mx-50 lg:gap-25 lg:my-20 ">
        <div>
          <img
            src={product.imgUrl}
            alt={product.name}
            className="border rounded-3xl w-150"
          />
        </div>

        <div className=" h-full max-h-150 flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold ">
            {product.name}
          </h2>
          <p className="text-lg lg:text-xl font-bold ">
            {product.price.toFixed(2)}$
          </p>
          <p
            className={`text-lg ${
              product.inStock ? "text-green-600" : "text-red-600"
            }`}
          >
            {product.inStock ? "მარაგშია" : "არ არის მარაგში"}
          </p>

          <p className="font-bold">
            ბრენდი: <span className="font-normal">{product.brand}</span>
          </p>

          {/* Sizes */}
          <div>
            <label htmlFor="size" className="font-bold">
              ზომები:{" "}
            </label>
            <select name="sizes" id="size">
              {product.sizes.map((size) => (
                <option key={id} value={product.sizes}>{size}</option>
              ))}
            </select>
          </div>

          {/*category  */}
          <p className="font-bold">
            კატეგორია:{" "}
            <span className="text-blue-400 ">{product.category}</span>
          </p>
          {/* quantity */}
          <div className="mb-5">
            <label htmlFor="num" className="font-bold">
              რაოდენობა:{" "}
            </label>
            <input
              type="number"
              name="number"
              id="num"
              defaultValue={1}
              min={0}
              className="w-10 border border-black rounded-lg p-1  font-medium"
            />
          </div>

          <button disabled={!product.inStock} className={` py-3 bg-black text-white rounded-xl flex items-center justify-center gap-1 cursor-pointer  opa  ${!product.inStock ? "opacity-20 " : "hover:opacity-85"} `}>
            < FaBasketShopping/>
            კალათაში დამატება
          </button>
            <PayPalButtons
                    style={{ layout: "vertical" }}
                    disabled={!product.inStock}
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: product.price.toFixed(2), // send this single product price
                              currency_code: "USD",
                            },
                          },
                        ],
                      });
                    }}
              onApprove={() => {   
                 navigate("/success", {
                  state: {
                    productName: product.name,
                    productPrice: product.price,
                  },
                });
              }}

              
            />
        </div>
      </div>

      <hr className="my-10" />

      <div className="my-20">
        <div className="flex gap-10 justify-center">
          <p className="text-xl"><span className={`hover:text-blue-600 font-bold ${active === "description" ? "text-blue-600 " : ""} cursor-pointer transition delay-100 duration-100 ease-in-out `} onClick={() => setactive("description")} >აღწერა</span></p>
          <p className="text-xl"><span className={`hover:text-blue-600 font-bold ${active === "delivery" ? "text-blue-600 " : ""}  cursor-pointer transition delay-100 duration-100 ease-in-out`} onClick={() => setactive("delivery")}>მიწოდება/განვადება</span></p>
        </div>

{active === "description" && (
<div className="mx-5">
  <div className="flex border-b py-4 text-[#5c5c5c]">
    <span className="w-40 font-medium">ბრენდი:</span>
    <span>{product.brand}</span>
  </div>

  <div className="flex border-b py-4 text-[#5c5c5c]">
    <span className="w-40 font-medium">კატეგორია:</span>
    <span>{product.category}</span>
  </div>

  <div className="flex border-b py-4 text-[#5c5c5c]">
    <span className="w-40 font-medium">ტიპი:</span>
    <span>{product.type}</span>
  </div>

  <div className="flex border-b py-4 text-[#5c5c5c]">
    <span className="w-40 font-medium">აღწერა:</span>
    <span>{product.description}</span>
  </div>

  <div className="flex border-b py-4 text-[#5c5c5c]">
    <span className="w-40 font-medium">ზომები:</span>
    <span>{product.sizes.join(", ")}</span>
  </div>

  <div className="flex border-b py-4 text-[#5c5c5c]">
    <span className="w-40 font-medium">მარაგი:</span>
    <span>{product.inStock ? "მარაგშია" : "არ არის მარაგში"}</span>
  </div>

  <div className="flex border-b py-4 text-[#5c5c5c]">
    <span className="w-40 font-medium">უნიკალური კოდი:</span>
    <span>{product.id}</span>
  </div>
</div>

)}

{active === "delivery" && (
  <div className="mx-5">
    <h2 className="text-2xl font-bold my-5">🚚 მიწოდება</h2>
    <h3 className="text-lg font-medium mb-2">📍 თბილისი სტანდარტული მიწოდება</h3>
    <p>შეკვეთები, რომლებიც გაფორმდება მიმდინარე დღის 17:00-მდე,
ბარდება ორ სამუშაო დღეში.</p>
<h3 className="text-lg font-medium my-2">📦 რეგიონები</h3>
<p>მიწოდება ხორციელდება წინასწარ განსაზღვრული გრაფიკის მიხედვით გრაფიკის სანახავად იხილეთ ლინკი: მიწოდება</p>
<h3 className="text-lg font-medium my-2">⛔ მნიშვნელოვანი ინფორმაცია</h3>
<ul className="list-disc mx-5">
  <li>შაბათ-კვირას საკურიერო მომსახურება არ მუშაობს</li>
  <li>პარასკევს გაფორმებული შეკვეთები მისამართზე ჩაბარდება სამშაბათს</li>
  <li>მიწოდების სერვისი ხელმისაწვდომია ორშაბათიდან პარასკევის ჩათვლით</li>
</ul>
<p className="my-2 font-bold">📞 თუ გაქვთ შეკითხვები ან გსურთ სწრაფი მიწოდების სერვისით სარგებლობა,
გთხოვთ დაგვიკავშირდეთ ან მოგვწეროთ.</p>

<hr className="my-5"/>

<div>
    <h2 className="text-2xl font-bold my-5">💳 განვადების პირობები</h2>
    <p>ჩვენთან მოქმედებს 0%-იანი განვადება შემდეგი ბანკების მეშვეობით:</p>
    <ul className="list-disc mx-5 font-bold mb-3">
      <li>თიბისი ბანკი</li>
      <li>ბანკი საქართველო</li>
      <li>კრედო ბანკი</li>
    </ul>

    <h3 className="text-lg font-medium my-2">როგორ ისარგებლოთ განვადებით:</h3>
    <ol className="list-decimal mx-5 font-medium mb-3">
      <li>შეარჩიეთ სასურველი პროდუქცია, რომლის ჯამური ღირებულება არის 100 ₾ ან მეტი</li>
      <li>დააჭირეთ ღილაკს „განვადებით შეძენა“ ან აირჩიეთ განვადება გადახდის გვერდზე</li>
      <li>შეავსეთ განაცხადი შესაბამისი ბანკის გვერდზე</li>
      <li>დაელოდეთ დადასტურებას</li>
    </ol>
  
</div>


  </div>
)}


      </div>
    </>
  );
};

export default ProductDetailPage;
