import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Divider } from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { useHistory } from "react-router-dom";

import Swal from "sweetalert2";


import { login } from "../../redux/userApiCalls";
import { useDispatch, useSelector } from "react-redux";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginErrorSet, setLoginErrorSet] = useState(false);
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [errorMessagePassword, setErrorMessagePassword] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  let userError = useSelector((state) => state.user.error);
  const history = useHistory();

  // React.useEffect(()=>{
  //   const redirectPage = ()=>{
  //     history.push("/login");
  //   }
  //   redirectPage();
  // },[]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let userData = {
      username: data.get("username"),
      password: data.get("password"),
    };
    console.log(userData);
    if (!userData.username) {
      setEmailError(true);
      setErrorMessageEmail("Username can't be empty!");
    } else if (!userData.password) {
      setPasswordError(true);
      setErrorMessagePassword("Password can't be empty!");
    } else {
      console.log(userData);
      const loginStatus = await login(dispatch, userData);
      setLoginErrorSet(userError);
      console.log(user);
      console.log(userError);
      if (loginStatus) {
        Swal.fire({
          title: "Login Success!",
          icon: "success",
          confirmButtonText: 'Ok',
          // showConfirmButton: false,
          // timer: 2000,
        }).then((result) => {
          window.location.href = "http://localhost:3000/home";
          // window.location.href = "http://localhost:3000/purchaseStaff/productList";
        })
        // setLoginCancelShow(true);
        // window.location.href = "http://localhost:3000/login";
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Login Unsuccess!',
          text: 'Please try again'
        })
        // setLoginShow(true);
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>

       {/* <SweetAlert
        show={loginShow}
        success
        title="Successfully Login!"
        // text="SweetAlert in React"
        onConfirm={() => setLoginShow(false)}
      ></SweetAlert> */}
      {/* <SweetAlert
        show={loginCancelShow}
        danger
        title="Login Unsuccess!"
        // text="SweetAlert in React"
        onConfirm={() => setLoginCancelShow(false)}
      ></SweetAlert> */}
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://res.cloudinary.com/midefulness/image/upload/v1661021593/OPTIMA/Login%20Images/construction-silhouette_qwbfoe.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                error={emailError}
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                helperText={errorMessageEmail}
                onChange={() => {
                  setEmailError(false);
                  setErrorMessageEmail("");
                }}
              />
              <TextField
                error={passwordError}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                helperText={errorMessagePassword}
                onChange={(e) => {
                  setPasswordError(false);
                  setErrorMessagePassword("");
                  setPassword(e.target.value);
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
                        onMouseDown={(e) => {
                          e.preventDefault();
                        }}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              {/* <Divider>or</Divider> */}
              {/* <Button
                variant="outlined"
                fullWidth
                sx={{ mt: 3, mb: 2, color: "#378CBB" }}
                // color="success"
                startIcon={<GoogleIcon />}
              >
                Continue with google
              </Button> */}
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                {/* <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid> */}
              </Grid>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
