import React, { useEffect, useState } from "react";
import Post from "./Post";
import Header from "./Header";
import axios from "axios";
function Home() {
  return (
    <>
      <Header />
      <Post />
    </>
  );
}

export default Home;
