import logo from "./logo.svg";
import "./App.css";
import Post from "./Post";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import AddNewBlog from "./AddNewBlog";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/AddNewBlog" element={<AddNewBlog />} />
        </Routes>
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
