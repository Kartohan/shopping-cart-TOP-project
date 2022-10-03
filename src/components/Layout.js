import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Card from "./Card";
import Home from "./Home";
import NavBar from "./NavBar";
import Shop from "./Shop";

const Layout = () => {
  const [card, setCard] = useState([]);
  const item = [
    {
      name: "One",
      price: 1.03,
      amount: 2,
    },
    {
      name: "Lamborgini",
      price: 12.03,
      amount: 5,
    },
    {
      name: "A mojet cucini?",
      price: 0.03,
      amount: 100,
    },
  ];
  const [items, setitems] = useState(item);
  const addToCard = (name, price, amount) => {
    let newCard = [...card];
    setitems((prevState) => {
      let currentItem = prevState.find((item) => item.name === name);
      let index = prevState.findIndex((item) => item.name === name);
      let array = prevState;
      currentItem.amount = currentItem.amount - amount;
      array[index] = currentItem;
      return array;
    });
    if (newCard.length === 0) {
      setCard([...newCard, { name, price, amount }]);
    } else {
      newCard.map((item) => {
        if (item.name === name) {
          item.amount = item.amount + amount;
          setCard([...newCard]);
        } else {
          setCard([...newCard, { name, price, amount }]);
        }
      });
    }
  };
  return (
    <>
      <NavBar card={card} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop items={items} addToCard={addToCard} />}
        />
        <Route path="/card" element={<Card card={card} />} />
      </Routes>
    </>
  );
};

export default Layout;
