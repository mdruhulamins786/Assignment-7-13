import React from "react";
import Hero from "../ui/Hero";
import FriendsList from "../ui/FriendsList";
import { ToastContainer } from "react-toastify";

const Home = () => {
  return (
    <div>
      <Hero />
      <FriendsList />
       <ToastContainer />
    </div>
  );
};

export default Home;
