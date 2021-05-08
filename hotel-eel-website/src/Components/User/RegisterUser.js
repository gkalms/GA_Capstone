import React from "react";
import { useEffect, useState } from "react";

export const RegisterUser = () => {
  const [register, setRegister] = useState({
      
    name: "",
    password: "",
      
  });

  const handleChange = (e) => {
    const newRegister = { ...register };
    newRegister[e.target.name] = e.target.value;
    console.log("this is the object being set", newRegister)
    setRegister(newRegister);
  };

  useEffect(() => {
    fetch("api/users", {
      headers: {
        token: window.localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((register) => setRegister(register));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({user: {...register}}),
    }).then((response) => {
      e.target.reset();
      alert("User created!");
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h1>Register</h1>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={register.name}
            onChange={handleChange}
            required
          />
          <span></span>
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={register.password}
            onChange={handleChange}
            required
          />
          <span></span>
        </label>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
