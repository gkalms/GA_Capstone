import { useState } from "react";
import { useHistory } from "react-router";

export const LoginUser = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  const changeHandler = (e) => {
    const newFormState = { ...form };
    newFormState[e.target.name] = e.target.value;
    setForm(newFormState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
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
  
      
      <form onSubmit={submitHandler}>
        <div className="container">
        <h1>Login</h1>
          <label>Name</label>
          <input
            type="text"
            label="Name"
            name="name"
            value={form.name}
            onChange={changeHandler}
          />
          <label>Password</label>
          <input
            type="text"
            name="password"
            value={form.password}
            onChange={changeHandler}
          />

          <button type="submit">Submit</button>
        </div>
      </form>
  );
};
