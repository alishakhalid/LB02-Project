import "../../styling/Checkout.css";
import Header from "../molecules/Header";
import Footer from "../molecules/Footer";
import Cart from "./Cart";
import { useState, useEffect } from "react";
import { LoginType } from "../../types/LoginType";
import { RegistrationType } from "../../types/RegistrationType";

export default function Checkout() {
  const [currentUser, setCurrentUser] = useState<any>();

  const getCurrentUser = () => {
    return localStorage.getItem("email");
  };

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <>
      <Header />
      {currentUser ? (
        <Cart
          clothingImage={
            "https://i.pinimg.com/736x/41/86/80/418680c973c18fbf2aab67acd367ef19.jpg"
          }
          clothingName={"Bahar-e-Nau"}
          clothingSize={"S"}
          shippingPrice={0}
          totalPrice={120}
        />
      ) : (
        <>
          <Cart
            clothingImage={
              "https://i.pinimg.com/736x/41/86/80/418680c973c18fbf2aab67acd367ef19.jpg"
            }
            clothingName={"Bano"}
            clothingSize={"S"}
            shippingPrice={0}
            totalPrice={150}
          />
        </>
      )}

      <Footer />
    </>
  );
}
