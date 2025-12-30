import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { CartProvider } from "./context/CartContext";
// d
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
   <CartProvider>
<PayPalScriptProvider
      options={{
        "client-id": "AZqDh7EpJdy3_7CITSoK5I4N2S65ZTx33HCJcUDgoBGp3rM4L5F8qb7NrQW645yWOMUtSNR7wib0X_60",
        currency: "USD",
      }}
    >
    <App />
    </PayPalScriptProvider>
    </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
