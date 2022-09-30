import React from "react";
import { useSelector } from "react-redux";
import { Link, Router } from "react-router-dom";
import { loadData } from "../utils/accessLocalStorage";

const Home = () => {
  const token = loadData("token");
  return (
    <>
      <h1>{token ? "Token : " + token.token : "Home"}</h1>
    </>
  );
};
export default Home;
