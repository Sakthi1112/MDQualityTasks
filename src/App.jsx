import React from "react";
import "./styles.css";
import "./tailwind-prebuilt.css";
import Header from "./components/Header";
import CardGroup from "./components/CardGroup";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="text-left pt-4 px-6 mb-2 mt-8 text-indigo-600 font-bold">
        Welcome To-InfixLMS | Super admin
      </div>
      <CardGroup />
    </div>
  );
}
