import { useState, useEffect } from "react";
import { useAuth } from "@/context/authContext";
import { db } from "@/config/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Load user data from Firestore
  useEffect(() => {
    const loadUserData = async () => {
      if (!user) return;

      try {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          setUserData({
            firstName: userDoc.data().firstName || "",
            lastName: userDoc.data().lastName || "",
            email: user.email,
            phone: userDoc.data().phone || "",
          });
        } else {
          setUserData({
            firstName: "",
            lastName: "",
            email: user.email,
            phone: "",
          });
        }
      } catch (err) {
        console.error("Error loading user data:", err);
        setError("მომხმარებლის მონაცემების ჩატვირთვა ვერ მოხერხდა");
      }
    };

    loadUserData();
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    setError("");
    setSuccess("");

    try {
      const userDocRef = doc(db, "users", user.uid);
      await updateDoc(userDocRef, {
        firstName: userData.firstName,
        lastName: userData.lastName,
        phone: userData.phone,
      });

      setSuccess("ანგარიში წარმატებით განახლდა!");
      setIsEditing(false);
    } catch (err) {
      setError("ანგარიშის განახლება ვერ მოხერხდა");
      console.error("Error saving user data:", err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (err) {
      setError("გამოსვლა ვერ მოხერხდა");
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl">გთხოვთ შეხვიდეთ ანგარიშში</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold">ჩემი ანგარიში</h1>
        </div>

        {/* ERROR & SUCCESS MESSAGES */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            {success}
          </div>
        )}

        {/* PROFILE CARD */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Profile Header */}
          <div className="flex items-center gap-6 mb-8 pb-8 border-b">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
              <span className="text-2xl text-white font-bold">
                {userData.firstName.charAt(0)}{userData.lastName.charAt(0)}
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                {userData.firstName} {userData.lastName}
              </h2>
              <p className="text-gray-600">{userData.email}</p>
            </div>
          </div>

          {/* Profile Information */}
          {!isEditing ? (
            <div className="space-y-6">
              {/* Display Mode */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    სახელი
                  </label>
                  <p className="text-lg text-gray-900">
                    {userData.firstName || "-"}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    გვარი
                  </label>
                  <p className="text-lg text-gray-900">
                    {userData.lastName || "-"}
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ელ ფოსტა
                </label>
                <p className="text-lg text-gray-900">{userData.email}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ტელეფონი
                </label>
                <p className="text-lg text-gray-900">
                  {userData.phone || "-"}
                </p>
              </div>

              {/* Edit Button */}
              <div className="flex gap-3 pt-6">
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex-1 bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700"
                >
                  ფაილის რედაქტირება
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Edit Mode */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="font-medium mb-2">სახელი</label>
                  <input
                    type="text"
                    name="firstName"
                    value={userData.firstName}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium mb-2">გვარი</label>
                  <input
                    type="text"
                    name="lastName"
                    value={userData.lastName}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-3 py-2"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="font-medium mb-2">ელ ფოსტა (უცვლელი)</label>
                <input
                  type="email"
                  value={userData.email}
                  disabled
                  className="border border-gray-300 rounded px-3 py-2 bg-gray-100"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium mb-2">ტელეფონი</label>
                <input
                  type="tel"
                  name="phone"
                  value={userData.phone}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2"
                />
              </div>

              {/* Save/Cancel Buttons */}
              <div className="flex gap-3 pt-6">
                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="flex-1 bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700 disabled:opacity-50"
                >
                  {isSaving ? "შენახვა..." : "შენახვა"}
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="flex-1 bg-gray-300 text-gray-800 py-2 rounded font-semibold hover:bg-gray-400"
                >
                  გაუქმება
                </button>
              </div>
            </div>
          )}

          {/* Logout Button */}
          <div className="mt-10 pt-8 border-t">
            <button
              onClick={handleLogout}
              className="w-full bg-red-600 text-white py-2 rounded font-semibold hover:bg-red-700"
            >
              გამოსვლა
            </button>
          </div>
        </div>

        {/* Order History Section */}
        <div className="mt-10 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">ჩემი შეკვეთები</h2>
          <p className="text-gray-600">აქ გამოჩნდება თქვენი შეკვეთების ისტორია (მალე დაემატება)</p>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
