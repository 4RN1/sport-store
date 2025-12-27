
import { Link } from "react-router-dom";

const LoginPage = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (

<>
    <div className="flex flex-col items-center justify-center h-180">


    <h1 className="text-md md:text-xl lg:text-2xl font-bold">შესვლა</h1>
      

       <form onSubmit={handleSubmit} className="flex flex-col gap-2 my-10 w-80  lg:w-100">
      <div className="flex flex-col">
        <label htmlFor="email" className="font-medium">ელ ფოსტა</label>
        <input type="email" id="email" className="border border-[#c0c0c0]
        w-full py-1 rounded my-2 px-3" required />
        </div>
<div className="flex flex-col">
        <label htmlFor="password" className="font-medium">პაროლი</label>
        <input type="password" id="password" className="border
        w-full py-1 rounded my-2 px-3 border-[#c0c0c0] " required />
</div>
   <div className="flex justify-between ">
    <div>
    <input type="checkbox" name="remember" id="remember"  className="mx-1" />
    <label htmlFor="remember">დამიმახსოვე</label>
    </div>
    <Link to="/account/forgot-password">პაროლის აღდგენა</Link>
   </div>

        <button type="submit" className=" py-2 bg-black text-white rounded font-bold my-5">შესვლა</button>
      </form>



    <Link to="/registration" className="font-medium hover:opacity-75"> მომხმარებლის რეგისტრაცია</Link>
</div>
   </>
  )
}

export default LoginPage