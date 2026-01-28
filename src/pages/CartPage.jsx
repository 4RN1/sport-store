import { useCart } from "@/context/cartContext";
import { Link } from "react-router-dom";
import { IoMdRemoveCircle } from "react-icons/io";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

const CartPage = () => {
  const { cart, removeFromCart, totalPrice } = useCart();
  const [orderProcessing, setOrderProcessing] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">თქვენი კალათა ცარიელია</h1>
          <p className="text-gray-600 mb-6">დაიწყეთ ყიდვა ახლა</p>
          <Link
            to="/category"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold"
          >
            კატეგორიებზე გამგზავრება
          </Link>
        </div>
      </div>
    );
  }

  const handleCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: totalPrice.toFixed(2),
            breakdown: {
              item_total: {
                currency_code: "USD",
                value: totalPrice.toFixed(2),
              },
            },
          },
          items: cart.map((item) => ({
            name: item.name,
            quantity: item.qty.toString(),
            unit_amount: {
              currency_code: "USD",
              value: item.price.toFixed(2),
            },
          })),
        },
      ],
    });
  };

  const handleApprove = (data, actions) => {
    setOrderProcessing(true);
    return actions.order.capture().then((orderData) => {
      console.log("Order successful:", orderData);
      // Redirect to success page
      window.location.href = "/success";
    });
  };

  const handleError = (err) => {
    console.error("PayPal error:", err);
    alert("დაფიქსირდა შეცდომა გადახდაში. გთხოვთ ცადეთ ხელმეორედ.");
    setOrderProcessing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold">
            ჩემი კალათა ({cart.length})
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* PRODUCTS LIST */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 flex gap-6 hover:bg-gray-50 transition"
                  >
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={item.imgUrl}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <Link
                        to={`/product/${item.id}`}
                        className="text-lg font-bold hover:text-green-600 transition"
                      >
                        {item.name}
                      </Link>

                      {item.sizes && item.sizes.length > 0 && (
                        <p className="text-sm text-gray-600 mt-1">
                          ზომები: {item.sizes.join(", ")}
                        </p>
                      )}

                      <div className="mt-4 flex items-center justify-between">
                        <div className="text-2xl font-bold text-green-600">
                          ${item.price.toFixed(2)}
                        </div>
                        <div className="text-sm">
                          რაოდენობა: <span className="font-bold">{item.qty}</span>
                        </div>
                      </div>

                      <div className="mt-3 text-lg font-semibold text-gray-900">
                        სულ: ${(item.price * item.qty).toFixed(2)}
                      </div>
                    </div>

                    {/* Remove Button */}
                    <div className="flex-shrink-0 flex items-start">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 transition"
                        title="წაშლა"
                      >
                        <IoMdRemoveCircle size={32} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CHECKOUT SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-10">
              <h2 className="text-2xl font-bold mb-6">შეკვეთის ჯამი</h2>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-gray-700">
                  <span>ქვეჯამი:</span>
                  <span className="font-semibold">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>ტრანსპორტირება:</span>
                  <span className="font-semibold text-green-600">უფასო</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between text-xl font-bold mb-8">
                <span>სულ:</span>
                <span className="text-green-600">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              {/* PayPal Button */}
              <div className="paypal-button-container">
                {orderProcessing ? (
                  <div className="text-center py-4">
                    <p className="text-gray-600">
                      გადახდა მუშავდება...
                    </p>
                  </div>
                ) : (
                  <PayPalButtons
                    createOrder={handleCreateOrder}
                    onApprove={handleApprove}
                    onError={handleError}
                    style={{
                      layout: "vertical",
                      color: "gold",
                      shape: "rect",
                      label: "paypal",
                    }}
                  />
                )}
              </div>

              {/* Continue Shopping */}
              <Link
                to="/category"
                className="block text-center mt-4 px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition font-semibold"
              >
                სიაში დაბრუნება
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
