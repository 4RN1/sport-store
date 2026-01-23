// components
import CompanylogoLoop from "@/components/CompanylogoLoop";
import Slider from "../components/Slider";
// icons
import { TbTruckDelivery } from "react-icons/tb";
import { FiGift } from "react-icons/fi";
import { MdOutlinePayment } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";
// Test Data
import { interestingProducts } from "@/test-data/data";
import { Link } from "react-router-dom";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useCart } from "@/context/cartContext";

const Home = () => {
  const { addToCart } = useCart();

  return (
    <>
      <main>
        <Slider />
        <CompanylogoLoop />

        {/* SECTION TITLE */}
        <div>
          <h1 className="text-center text-lg md:text-2xl lg:text-3xl font-bold my-10">
            შესაძლოა დაგაინტერესოთ
          </h1>
          <div className="w-full overflow-x-auto bg-gray-300 py-6">
            <div
              className="flex gap-6 px-4 min-w-max [&::-webkit-scrollbar]:w-2
                        [&::-webkit-scrollbar-track]:rounded-full
                        [&::-webkit-scrollbar-track]:bg-gray-100
                        [&::-webkit-scrollbar-thumb]:rounded-full
                        [&::-webkit-scrollbar-thumb]:bg-gray-300
                        dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
            >
              {interestingProducts.map((item) => (
                <div
                  key={item.id}
                  className="smin-w-[260px] w-full max-w-75 shadow-lg rounded-xl border relative bg-white flex flex-col justify-between"
                >
                  <img
                    src={item.imgUrl}
                    alt={item.name}
                    className="w-full rounded-t-xl h-65"
                  />

                  <div className="p-4">
                    <h1 className="font-bold text-sm mb-1">{item.name}</h1>

                    <p className="text-xs">
                      ზომები:
                      <span className="font-extralight">
                        {" "}
                        {item.sizes.join(", ")}
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
                        {item.price.toFixed(2)}$
                      </p>

                      <Link
                        to={`/product/${item.id}`}
                        className="bg-[#e4e4e4] px-3 py-1 rounded-full text-sm hover:opacity-80 active:opacity-80"
                      >
                        სრულად
                      </Link>
                    </div>

                    <button
                      className="absolute top-2 right-2 hover:opacity-80 active:opacity-80 cursor-pointer"
                      onClick={() => addToCart(item)}
                      disabled={!item.inStock}
                    >
                      <IoMdAddCircle size={36} className="text-green-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <div className="grid grid-cols-1 lg:grid-cols-3 my-25 md:mx-25">
          <div className="flex flex-col items-center my-4">
            <iframe
              src="https://lottie.host/embed/990f25bc-cee3-434c-aa57-ac3a63f8ea58/F9IgPjbCxX.json"
              className="h-60"
            ></iframe>
            <h3 className="text-xl font-bold my-5">მიტანის სერვისი</h3>
            <p className="text-md text-center">
              სწრაფი და უსაფრთხო მიწოდება საქართველოს მასშტაბით — თბილისში
              მიწოდება უფასოა, ხოლო რეგიონებში მოქმედებს 10 ლარის საკურიერო
              გადასახადი
            </p>
          </div>

          <div className="flex flex-col items-center  p-5 border-y lg:border-y-0 lg:border-x">
            <iframe
              src="https://lottie.host/embed/2c8a8406-20ba-4442-89ca-eb0da8c9c8e2/lzkHFHqYrQ.json"
              frameborder="0"
              className="h-60"
            ></iframe>
            <h3 className="text-xl font-bold my-5 text-center">
              Visa და Mastercard-ით გადახდები
            </h3>
            <p className="text-md text-center">
              უსაფრთხო ონლაინ გადახდა Visa და Mastercard საბანკო ბარათებით
            </p>
          </div>

          <div className="flex flex-col items-center p-5 ">
            <iframe
              src="https://lottie.host/embed/a3940f32-54d8-4928-b98f-d444c5419f41/ed1pIHWDef.lottie"
              frameborder="0"
              className="h-60"
            ></iframe>
            <h3 className="text-xl font-bold my-5 text-center">
              სასაჩუქრე ვაუჩერები
            </h3>
            <p className="text-md text-center">
              აჩუქე არჩევანი სასაჩუქრე ვაუჩერით — გამოიყენე ონლაინ შეკვეთის დროს
              და გადაიხადე მარტივად
            </p>
          </div>
        </div>

        {/* CONTACT */}
        <div className="grid grid-cols-1 md:grid-cols-2 mx-2 my-5 gap-8">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-xl font-bold">კონტაქტი</h1>

              <a
                href="mailto:anriskr14@gmail.com"
                className="flex items-center justify-center gap-2 text-sm lg:text-lg"
              >
                <FaFacebookF />
                anriskr14@gmail.com
              </a>

              <a
                href="tel:+555123456789"
                className="flex items-center justify-center gap-2 text-sm lg:text-lg"
              >
                <BsFillTelephoneFill />
                555 123 456 789
              </a>

              <p className="flex items-center justify-center gap-2 text-sm lg:text-lg">
                <FaLocationDot />
                თბილისი, ალექსანდრე გრიბოედოვის ქუჩა
              </p>
            </div>

            <div className="text-center mb-10">
              <h1 className="text-xl font-bold">სამუშაო საათები</h1>
              <p className="text-sm lg:text-xl my-2">
                ორშაბათი - პარასკევი : 09:00 - 21:00
              </p>
              <p className="text-sm lg:text-xl">შაბათი : 10:00 - 17:00</p>
            </div>
          </div>

          <div className="w-full h-65 md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.2675559292366!2d44.78908267648321!3d41.7026276763818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d16ce18e61b%3A0xb496bc458aa122a0!2sSEAGROUP%20TECH!5e1!3m2!1ska!2sge!4v1765654197212!5m2!1ska!2sge"
              className="w-full h-full rounded-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
