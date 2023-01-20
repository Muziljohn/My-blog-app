import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = async (e) => {
    const Credential = {
      email: email,
      password: password,
    };
    e.preventDefault();
    try {
      const data = await axios.post("user/login", Credential);
      console.log(data);

      if (data.data.succes) {
        localStorage.setItem("token", data.data.token);
        alert(localStorage.getItem("token"));
        navigate("/home");
      }
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleClick}>
        <input
          placeholder="User Name"
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
          required
          value={email}
        />
        <input
          placeholder="Password"
          type={"password"}
          value={password}
          minLength="5"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" value="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
