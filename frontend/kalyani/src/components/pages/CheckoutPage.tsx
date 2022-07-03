import React from "react";
import Header from "../molecules/Header";
import Footer from "../organisms/Footer";
import Cart from "./Cart";
import "../../styling/Checkout.css";

export default function Checkout() {
  return (
    <>
      <Header />
      <Cart
        clothingImage={
          "https://i.pinimg.com/originals/90/b1/05/90b10558027511643312ab9a9511a4f4.jpg"
        }
        clothingName={"Tittly uri"}
        clothingSize={"S"}
        shippingPrice={0}
        totalPrice={20}
        amount={5}
      />
      <Footer />
    </>
  );
}
