import CompanylogoLoop from "@/components/CompanylogoLoop";
import Slider from "../components/Slider";
import { TbTruckDelivery } from "react-icons/tb";
import { FiGift } from "react-icons/fi";
import { MdOutlinePayment } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

import { FaLocationDot } from "react-icons/fa6";
const Home = () => {
  return (
    <>
      <main>
        <Slider />
        <CompanylogoLoop />

        <div>
          <h1 className="text-center sm:text-lg md:text-2xl lg:text-3xl  font-bold  my-10">
            შესაძლოა დაგაინტერესოთ
          </h1>

          {/* პროდუქტები აქ */}
        </div>

        <div className=" sm:grid  grid-cols-1 md:grid-cols-2 md:mx-25 lg:grid-cols-3  my-25">
          <div className="flex flex-col items-center p-5">
            <TbTruckDelivery size={100} />
            <h3 className="text-xl font-bold my-5">მიტანის სერვისი</h3>
            <p className="text-md text-center">
              სწრაფი და უსაფრთხო მიწოდება საქართველოს მასშტაბით — თბილისში
              მიწოდება უფასოა, ხოლო რეგიონებში მოქმედებს 10 ლარის საკურიერო
              გადასახადი
            </p>
          </div>
          <div className="flex flex-col items-center border-l border-r p-5">
            <MdOutlinePayment size={100} />
            <h3 className="text-xl font-bold my-5">
              Visa და Mastercard-ით გადახდები
            </h3>
            <p className="text-md text-center">
              უსაფრთხო ონლაინ გადახდა Visa და Mastercard საბანკო ბარათებით
            </p>
          </div>
          <div className="flex  flex-col items-center p-5">
            <FiGift size={100} />
            <h3 className="text-xl font-bold my-5">სასაჩუქრე ვაუჩერები</h3>
            <p className="text-md text-center">
              აჩუქე არჩევანი სასაჩუქრე ვაუჩერით — გამოიყენე ონლაინ შეკვეთის დროს
              და გადაიხადე მარტივად
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 w-7xl mx-auto">
          <div className="flex flex-col gap-5">
            
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-xl font-bold">კონტაქტი</h1>
              <p >
                <a
                  href="mailto:anriskr14@gmail.com"
                  className="flex items-center gap-1 text-lg justify-center"
                >
                  <FaFacebookF /> anriskr14@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+555 123 456 789"
                  className="flex items-center gap-1 text-lg justify-center"
                >
                  <BsFillTelephoneFill />
                  555 123 456 789
                </a>
              </p>
              <p className="flex items-center gap-1 text-lg justify-center">
                <FaLocationDot />
                თბილისი, ალექსანდრე გრიბოედოვის ქუჩა
              </p>
            </div>
            
            <div className="text-center mb-10">
              <h1 className="text-xl font-bold">სამუშაო საათები</h1>
              <p className="text-lg my-2">ორშაბათი - პარასკევი : 09:00 - 21:00</p>
              <p className="text-lg"> შაბათი : 10:00 - 17:00</p>
            </div>
          </div>
          <div className="w-full h-65.5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.2675559292366!2d44.78908267648321!3d41.7026276763818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d16ce18e61b%3A0xb496bc458aa122a0!2sSEAGROUP%20TECH!5e1!3m2!1ska!2sge!4v1765654197212!5m2!1ska!2sge"
              width="100%"
              height="100%"
              style={{ border: 0 } }
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
