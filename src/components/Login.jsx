import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import axios from "axios";
import {
  loginFailure,
  loginRequest,
  loginSuccess
} from "../Redux/AuthReducer/actions";
import { saveData } from "../utils/accessLocalStorage";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuth, isAuthLoading, isAuthError } = useSelector((state) => {
    return {
      isAuth: state.AuthReducer.isAuth,
      isAuthError: state.AuthReducer.isAuthError,
      isAuthLoading: state.AuthReducer.isAuthLoading
    };
  }, shallowEqual);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      const paylaod = {
        email: email,
        password: password
      };
      dispatch(loginRequest());
      axios
        .post("https://reqres.in/api/login", paylaod)
        .then((r) => {
          dispatch(loginSuccess(r.data));
          saveData("token", r.data);
          alert("Login Succeed");
          navigate("/");
        })
        .catch((e) => {
          dispatch(loginFailure());
          alert("Enter Valid Details");
        });
    } else {
      alert("Enter Valid Details");
    }
  };
  return (
    <>
      <div>
        <h1>Login</h1>
        <span>eve.holt@reqres.in</span>
        <br /> <span>cityslicka</span>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Your Email"
          />{" "}
          <br /> <br />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Your Password"
          />{" "}
          <br /> <br />
          <button>Login</button>
        </form>
      </div>
    </>
  );
};
export default Login;
