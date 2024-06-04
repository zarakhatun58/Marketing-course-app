import React, { useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Alert } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import "./Login.css";
const SignIn = () => {
  const { signInWithGoogle, user, setUser, logOut, handleEmailLogin } =
    useAuth();
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(true);
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const url = location.state?.from || "/home";

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      const res = await signInWithGoogle();
      setUser(res);
      navigate(url);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogOut = async () => {
    setIsLoading(true);
    try {
      await logOut();
      setUser({});
      navigate("/home");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    setLoginError(null); // Reset login error
    try {
      console.log("Logging in with:", data.email, data.password); // Log credentials
      await handleEmailLogin(data.email, data.password);
      reset();
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);
      setLoginError(error.message); // Set login error message
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="form-container">
        <div className=" pb-5">
          <h3 className="text-center  pb-3">Login</h3>
          <div className="w-75 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  {...register("password")}
                  placeholder="Your password"
                  required
                />
              </div>
              <button className="signINbtn" type="submit">
                {isLoading ? "Logging in..." : "Login"}
              </button>
              {loginError && (
              <Alert severity="error" style={{ marginTop: "10px" }}>
                {loginError}
              </Alert>
            )}
            </form>
          </div>
        </div>
        <div className="mx-auto p-0">
          <div className="text-center">
            {!user?.displayName ? (
              <button
                onClick={handleGoogleLogin}
                className="btn btn-primary text-white"
              >
                Google sign In
              </button>
            ) : (
              <button
                onClick={handleLogOut}
                className="btn btn-primary mt-3 text-white"
              >
                Log Out
              </button>
            )}
            <br />
            <Link
              className="text-success"
              style={{
                textDecoration: "none",
                color: "#000",
                marginTop: "10px",
              }}
              to="/register"
            >
              New User? Please Register
            </Link>
            {user?.email && (
              <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                Login successfully!
              </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
