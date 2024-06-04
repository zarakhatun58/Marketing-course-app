import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const { handleRegister, isLoading } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { email, password, confirmPassword, name } = data;
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      await handleRegister(email, password, name);
      alert("Registered successfully");
      reset();
      navigate("/home");
    } catch (error) {
      alert("Registration failed. Please try again.");
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="form-container">
      <h3 className="text-center  py-5">Register</h3>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              {...register("name")}
              name="name"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <input
              type="email"
              {...register("email")}
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              {...register("password")}
              placeholder="Password"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              {...register("confirmPassword")}
              placeholder="Confirm Password"
              required
            />
          </div>
          <button type="submit" disabled={isLoading}>
            Sign Up
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
