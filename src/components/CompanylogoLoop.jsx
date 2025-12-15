import LogoLoop from "./LogoLoop";

const CompanylogoLoop = () => {
  const imageLogos = [
    {
      src: "https://res.cloudinary.com/dkwh7oqpf/image/upload/v1765643787/Logo_Alternative_vcpgw1.webp",
      alt: "Adidas",
    },
    {
      src: "https://res.cloudinary.com/dkwh7oqpf/image/upload/v1765645129/Nike-logo_p39ebv.png",
      alt: "Nike",
    },
    {
      src: "https://res.cloudinary.com/dkwh7oqpf/image/upload/v1765645330/Puma_logo_PNG1_cbifmn.png",
      alt: "Puma",
    },
    {
      src: "https://res.cloudinary.com/dkwh7oqpf/image/upload/v1765644938/macron-logo_brandlogos.net_huqlz_skxckv.png",
      alt: "Macron",
    },
    {
      src: "https://res.cloudinary.com/dkwh7oqpf/image/upload/v1765632073/Under-Armour-Logo-1_pp4ne7.svg",
      alt: "Lotto",
    },
      {
      src: "https://res.cloudinary.com/dkwh7oqpf/image/upload/v1765644432/New_Balance_id6MQLb5ga_1_r5ggc0.png",
      alt: "New Balance",
    },
  ];

  return (
    <>

      <h1 className="sm:text-lg md:text-2xl lg:text-3xl  font-bold text-center my-10">პარტნიორი კომპანიები</h1>
      <div className="h-30 my-20"
      >
        {/* Basic horizontal loop */}
        <LogoLoop
          logos={imageLogos}
          speed={90}
          direction="left"
          logoHeight={60}
          gap={70}
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>


      


      
    </>
  );
};

export default CompanylogoLoop;
