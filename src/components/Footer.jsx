import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-300 fixed">
      
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10
                      grid-cols-1 md:grid-cols-3">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            SoccerShop
          </h2>
          <p className="text-sm leading-relaxed">
            პრემიუმ ხარისხის ფეხბურთის ტანსაცმელი.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            მაღაზია
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to = "/" className="hover:text-white cursor-pointer">მთავარი</Link></li>
            <li><Link to = "/category" className="hover:text-white cursor-pointer">ყველა კატეგორია</Link></li>
            <li><Link to = "/category/jerseys" className="hover:text-white cursor-pointer">ფორმები</Link></li>
            <li><Link to = "/category/shoes" className="hover:text-white cursor-pointer">ფეხბურთის ფეხსაცმელები</Link></li>
            <li><Link to = "/category/equipment" className="hover:text-white cursor-pointer">სპორტული ინვენტარი</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            მხარდაჭერა
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to = "/info#contact" className="hover:text-white cursor-pointer">დაგვიკავშირდით</Link></li>
            <li><Link to = "/info#shipping" className="hover:text-white cursor-pointer">მიწოდება და დაბრუნება</Link></li>
            <li><Link to = "/info#faq" className="hover:text-white cursor-pointer">ხშირად დასმული კითხვები</Link></li>
            <li><Link to = "/info#privacy" className="hover:text-white cursor-pointer">კონფიდენციალურობის პოლიტიკა</Link></li>
            <li><Link to = "/info#terms" className="hover:text-white cursor-pointer">წესები და პირობები</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-700 py-4 text-center text-sm">
        © 2025 SoccerShop. ყველა უფლება დაცულია.
      </div>

    </footer>
  );
};

export default Footer;
