import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useStateValue } from "./StateProvider";
import "./App.css";
function Header() {
  const [{ user }, dispatch] = useStateValue();
  const getUser = async () => {
    try {
      const User = await axios.get(`user/`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      console.log(User.data.name);
      if (User) {
        dispatch({
          type: "SET_USER",
          user: User.data.name,
        });
      }
    } catch (error) {}
  };
  useEffect(() => {
    getUser();
    console.log(user);
  }, [user]);
  const logout = () => {
    console.log("clicked");
  };
  return (
    <header className="header">
      <a href="/" className="logo">
        My Blog App
      </a>
      <nav className="nav">
        {!user && (
          <>
            <Link className="Link" to={"/Login"}>
              login
            </Link>
            <Link className="Link" to={"/register"}>
              Regsiter
            </Link>
          </>
        )}
        {user && (
          <>
            <Link className="Link" to={"/AddNewBlog"}>
              Add new Blog
            </Link>
            <Link className="Link">
              <span onClick={logout}>Logout</span>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
