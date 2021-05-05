import { Grid, makeStyles, TextField, Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";

const useStyles = makeStyles(theme =>({
  root: {
'& .MuiFormControl-root': {
  width: '80%',
  margin:theme.spacing(1)
}
  }
}))

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

  const classes = useStyles();

  return (
<>
 <h1>Login</h1>
  <form className={classes.root} onSubmit={submitHandler}>
<Grid container>
  <Grid item xs={3}>
    <TextField
    variant="outlined"
    label="Name"
    name="name"
    value={form.name}
    onChange={changeHandler}
    />
  </Grid>

  <Grid item xs={3}>
    <TextField
    variant="outlined"
    label="Password"
    name="password"
    value={form.password}
    onChange={changeHandler}
    />
  </Grid>
  <Grid item xs={3}>
  <Button type="submit" variant="contained" color="primary">Submit</Button>
  </Grid>
</Grid>

{/* <label>
  Username:
  <input name="name" value={form.name} onChange={changeHandler} />
</label>
<label>
  Password:
  <input
    name="password"
    value={form.password}
    onChange={changeHandler}
  />
</label>

<button type="submit">Submit</button> */}

</form> 
    </>
  );
};
