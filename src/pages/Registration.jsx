import React from "react";
import { Link } from "react-router-dom";


const Registration = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen mx-10 md:mx-0">
      <h1 className="text-md md:text-xl lg:text-2xl font-bold">მომხმარებლის რეგისტრაცია</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2 my-10">
        <div className="flex gap-2.5 my-2">
          <div className="flex flex-col">
            <label htmlFor="name" className="font-medium">სახელი</label>
            <input type="text" id="name" required  className="border
        w-full py-1 rounded my-2 px-3 border-[#c0c0c0] "/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastname" className="font-medium">გვარი</label>
            <input type="text" id="lastname" className="border
        w-full py-1 rounded my-2 px-3 border-[#c0c0c0] " required />
          </div>
        </div>

        <label htmlFor="tel" className="font-medium">ტელეფონი</label>
        <input type="tel" id="tel" className="border
        w-full py-1 rounded my-1 px-3 border-[#c0c0c0] " required />

        <label htmlFor="email" className="font-medium">ელ ფოსტა</label>
        <input type="email" id="email" className="border
        w-full py-1 rounded my-1 px-3 border-[#c0c0c0] " required />

        <label htmlFor="password" className="font-medium">პაროლი</label>
        <input type="password" id="password" className="border
        w-full py-1 rounded my-1 px-3 border-[#c0c0c0] " required />

        <label htmlFor="confirmPassword" className="font-medium">გაიმეორეთ პაროლი</label>
        <input type="password" id="confirmPassword" className="border
        w-full py-1 rounded my-1 px-3 border-[#c0c0c0] " required />

        <button type="submit" className="py-2 bg-black text-white rounded font-bold my-5">რეგისტრაცია</button>
      </form>

    <Link to="/login" className="font-medium hover:opacity-75"> ავტორიზაცია</Link>

    <div>
      
    </div>


    </div>
  );
};

export default Registration;
