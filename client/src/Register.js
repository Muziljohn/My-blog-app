import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = async (e) => {
    e.preventDefault();
    const credentills = {
      email: email,
      password: password,
      name: name,
    };
    try {
      const data = await axios.post("user/register", credentills);

      if (data.data.succes) {
        alert("account created successfull");
        navigation("/login");
      }
      console.log(data.data.succes, data.name, data);
      console.log(email, password, name);
    } catch (err) {
      alert(err.message);
      alert("benchoti");
    }
  };
  return (
    <div className="login">
      <h1>Register</h1>
      <form onSubmit={handleClick}>
        <input
          placeholder="email"
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
          required
          value={email}
        />
        <input
          placeholder="User Name"
          onChange={(e) => setName(e.target.value)}
          required
          value={name}
        />
        <input
          placeholder="Password"
          type={"password"}
          minLength="5"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">register</button>
      </form>
    </div>
  );
}

export default Register;
