import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/authContext";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, db } from "@/config/firebase";
import { setDoc, doc } from "firebase/firestore";
import { FcGoogle } from "react-icons/fc";

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("პაროლები არ ემთხვევა");
      return;
    }

    if (formData.password.length < 6) {
      setError("პაროლი უნდა იყოს მინიმუმ 6 სიმბოლოს");
      return;
    }

    setLoading(true);

    try {
      const user = await signup(formData.email, formData.password);

      // Save user info to Firestore
      await setDoc(doc(db, "users", user.uid), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        email: formData.email,
        createdAt: new Date(),
      });

      navigate("/");
    } catch (err) {
      setError(err.message || "რეგისტრაცია ვერ მოხერხდა");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setError("");
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Save Google user info to Firestore
      await setDoc(
        doc(db, "users", user.uid),
        {
          firstName: user.displayName?.split(" ")[0] || "",
          lastName: user.displayName?.split(" ")[1] || "",
          email: user.email,
          createdAt: new Date(),
        },
        { merge: true }
      );

      navigate("/");
    } catch (err) {
      setError(err.message || "Google-ის მაშინებით რეგისტრაცია ვერ მოხერხდა");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 mx-4 md:mx-0">
      <h1 className="text-md md:text-xl lg:text-2xl font-bold mb-8">
        მომხმარებლის რეგისტრაცია
      </h1>

      {error && (
        <div className="w-full max-w-96 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-10 w-full max-w-96">
        <div className="flex gap-2.5">
          <div className="flex flex-col flex-1">
            <label htmlFor="firstName" className="font-medium mb-2">
              სახელი
            </label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border border-[#c0c0c0] w-full py-2 rounded px-3"
              required
              disabled={loading}
            />
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="lastName" className="font-medium mb-2">
              გვარი
            </label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border border-[#c0c0c0] w-full py-2 rounded px-3"
              required
              disabled={loading}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="font-medium mb-2">
            ტელეფონი
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border border-[#c0c0c0] w-full py-2 rounded px-3"
            required
            disabled={loading}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium mb-2">
            ელ ფოსტა
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
            className="border border-[#c0c0c0] w-full py-2 rounded px-3"
            required
            disabled={loading}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="confirmPassword" className="font-medium mb-2">
            გაიმეორეთ პაროლი
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="border border-[#c0c0c0] w-full py-2 rounded px-3"
            required
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="py-2 bg-black text-white rounded font-bold my-5 hover:bg-gray-800 disabled:opacity-50"
        >
          {loading ? "იტვირთება..." : "რეგისტრაცია"}
        </button>
      </form>

      <div className="w-full max-w-96 flex items-center gap-3 my-5">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-gray-600">ან</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <button
        onClick={handleGoogleSignup}
        disabled={loading}
        className="flex items-center justify-center gap-3 w-full max-w-96 border-2 border-gray-300 py-2 rounded font-semibold hover:bg-gray-50 disabled:opacity-50"
      >
        <FcGoogle size={24} />
        Google-ის მაშინებით რეგისტრაცია
      </button>

      <Link to="/login" className="font-medium hover:opacity-75 mt-8">
        უკვე გაქვთ ანგარიში? შეხვიდით
      </Link>
    </div>
  );
};

export default Registration;
