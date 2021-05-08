import { useState } from "react";
import { useHistory } from "react-router";
import { RegisterUser } from "./RegisterUser";

export const LoginUser = (props) => {
  const history = useHistory();
  const [login, setLogin] = useState({
    name: "",
    password: "",
  });
  const changeHandler = (e) => {
    const newLoginState = { ...login };
    newLoginState[e.target.name] = e.target.value;
    setLogin(newLoginState);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((response) => response.json())
      .then((data) => {
        window.localStorage.setItem("token", data.token);
        props.setLoggedIn(true);
        if (data.token) {
          history.replace("/DisplayEnquiry");
        }
      });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="container">
          <h1>Login</h1>
          <label>
            Name
            <input
              type="text"
              label="Name"
              name="name"
              value={login.name}
              onChange={changeHandler}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={login.password}
              onChange={changeHandler}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>
        <RegisterUser />
      </div>
    </>
  );
};
