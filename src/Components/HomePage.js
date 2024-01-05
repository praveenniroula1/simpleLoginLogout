import React from "react";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogOut = (e) => {
    e.preventDefault();
    toast.success("redirected to LoginPage");

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return (
    <>
      <button onClick={handleLogOut} className="btn btn-danger">
        Log Me Out
      </button>
      <h1>Welcome To Home Page </h1>;
    </>
  );
};

export default HomePage;
