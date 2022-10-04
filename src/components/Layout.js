import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Card from "./Card";
import Home from "./Home";
import NavBar from "./NavBar";
import Shop from "./Shop";
import {
  Beach,
  Car,
  Flowers,
  Galaxy,
  GreenLeaves,
  Mountain,
  NightCity,
  Skyscraper,
} from "../assets";

const Layout = () => {
  const [card, setCard] = useState([]);
  const item = [
    {
      name: "Sunset on the Beach",
      price: 2.5,
      amount: 8,
      img: Beach,
    },
    {
      name: "Luxury Car",
      price: 24.99,
      amount: 2,
      img: Car,
    },
    {
      name: "Pink flowers",
      price: 1.15,
      amount: 25,
      img: Flowers,
    },
    {
      name: "Galaxy",
      price: 49.99,
      amount: 2,
      img: Galaxy,
    },
    {
      name: "Green Leaves",
      price: 3.55,
      amount: 23,
      img: GreenLeaves,
    },
    {
      name: "Big Big Mountain",
      price: 10.1,
      amount: 4,
      img: Mountain,
    },
    {
      name: "Night City",
      price: 19.99,
      amount: 3,
      img: NightCity,
    },
    {
      name: "Skyscraper",
      price: 7.28,
      amount: 13,
      img: Skyscraper,
    },
  ];
  const [items, setitems] = useState(item);
  const removeFromCard = (name) => {
    let newCard = [...card];
    let currentCardItem = newCard.find((item) => item.name);
    let index = items.findIndex((item) => item.name === name);
    let array = items;
    let currentItem = array.find((item) => item.name === name);
    currentItem.amount = currentItem.amount + currentCardItem.amount;
    newCard = newCard.filter((item) => item.name !== name);
    array[index] = currentItem;
    setCard(newCard);
    setitems(array);
  };
  const addToCard = (name, price, amount, img) => {
    let newCard = [...card];
    let currentItem = items.find((item) => item.name === name);
    let index = items.findIndex((item) => item.name === name);
    let array = items;
    currentItem.amount = currentItem.amount - amount;
    array[index] = currentItem;
    setitems(array);
    if (newCard.length === 0) {
      setCard((prevState) => [...prevState, { name, price, amount, img }]);
    } else {
      let currentItem = newCard.find((item) => item.name === name);
      if (currentItem === undefined) {
        setCard((prevState) => [...prevState, { name, price, amount, img }]);
      } else {
        let index = newCard.findIndex((item) => item.name === name);
        currentItem.amount = currentItem.amount + amount;
        newCard[index] = currentItem;
        setCard(newCard);
      }
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
        <Route
          path="/card"
          element={<Card card={card} removeFromCard={removeFromCard} />}
        />
      </Routes>
    </>
  );
};

export default Layout;
