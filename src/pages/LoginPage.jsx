import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "@/context/authContext";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/config/firebase";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message || "შესვლა ვერ მოხერხდა");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (err) {
      setError(err.message || "Google-ის მাშინებით შესვლა ვერ მოხერხდა");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-10">
        <h1 className="text-md md:text-xl lg:text-2xl font-bold mb-8">შესვლა</h1>

        {error && (
          <div className="w-80 lg:w-100 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-10 w-80 lg:w-100">
          <div className="flex flex-col">
            <label htmlFor="email" className="font-medium mb-2">
              ელ ფოსტა
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-[#c0c0c0] w-full py-2 rounded px-3"
              required
              disabled={loading}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="font-medium mb-2">
              პაროლი
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-[#c0c0c0] w-full py-2 rounded px-3"
              required
              disabled={loading}
            />
          </div>

          <div className="flex justify-between">
            <div>
              <input type="checkbox" name="remember" id="remember" className="mx-1" />
              <label htmlFor="remember">დამიმახსოვე</label>
            </div>
            <Link to="/account/forgot-password" className="text-blue-600 hover:underline">
              პაროლის აღდგენა
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="py-2 bg-black text-white rounded font-bold my-5 hover:bg-gray-800 disabled:opacity-50"
          >
            {loading ? "იტვირთება..." : "შესვლა"}
          </button>
        </form>

        <div className="w-80 lg:w-100 flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-600">ან</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="flex items-center justify-center gap-3 w-80 lg:w-100 border-2 border-gray-300 py-2 rounded font-semibold hover:bg-gray-50 disabled:opacity-50"
        >
          <FcGoogle size={24} />
          Google-ის მაშინებით შესვლა
        </button>

        <Link to="/registration" className="font-medium hover:opacity-75 mt-8">
          ახალი ანგარიშის შექმნა
        </Link>
      </div>
    </>
  );
};

export default LoginPage;