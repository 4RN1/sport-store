import { useLocation } from "react-router-dom";

const ThankYouPage = () => {
  const location = useLocation();
  const { productName, productPrice, payerName, payerEmail } = location.state || {};

  return (
    <div className="flex flex-col items-center justify-center h-screen">
     <div className="border-2 rounded-2xl bg-green-300 border-black text-center p-10">
        <h1 className="text-3xl font-bold mb-4">მადლობა შეძენისთვის</h1>
      {productName && (
        <div className="font-bold text-2xl ">
        <p className="mb-2 ">
          პროდუქტი: <strong>{productName}</strong> 
        </p>
        <p className="my-5">ფასი : {productPrice.toFixed(2)}$</p>
        </div>
      )}
      {payerName && <p className="mb-2">გადახდის მსაჯი: {payerName}</p>}
      {payerEmail && <p className="mb-2">ელ. ფოსტა: {payerEmail}</p>}
      <p className="font-bold text-2xl my-3">თქვენი გადახდა წარმატებით განხორციელდა (sandbox)</p>
      </div>
    </div>
    
  );
};

export default ThankYouPage;
