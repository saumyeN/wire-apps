import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import ItemCategory from "./components/Item-category/ItemCategory";
import Header from './layouts/header/Header'

function App() {
  return (
    <div className="modern-walk-web">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/mens-clothing" element={<ItemCategory />}></Route>
        <Route exact path="/womens-clothing" element={<ItemCategory />}></Route>
      </Routes>
    </div>
  );
}

export default App;
