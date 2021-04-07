import React from "react";
import axios from "axios";
import { websitePrefix } from "../../api-info";
import Input from "../../../components/input/input";
import Button from "../../../components/button/button";
import { useDispatch, useSelector } from "react-redux";

export const SignInAPI = (username, password) => {
  return axios({
    url: websitePrefix + "/api/log-login-attempt/",
    method: "POST",
    data: {
      userId: username,
      userPassword: password,
    },
    headers: { "Content-Type": "application/json" },
    mode: "cors",
  });
};

const SignIn = () => {
  let x = "";
  return <div></div>;
};

export default SignIn;
