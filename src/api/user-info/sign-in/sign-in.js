import React, { useState } from "react";
import axios from "axios";
import { websitePrefix } from "../../api-info";
import Input from "../../../components/input/input";
import Button from "../../../components/button/button";
import { useDispatch } from "react-redux";
import {
  startLoading,
  cancelLoading,
} from "../../../redux/loading/loading.actions";
import {
  SignInContainer,
  ButtonContainer,
  InputContainer,
  BoldSpan,
} from "./sign-in.styles";

export const SignInAPI = (username, password) => {
  return axios({
    url: websitePrefix + "api/log-login-attempt/",
    method: "POST",
    data: {
      "user-id": username,
      "user-password": password,
    },
    headers: { "Content-Type": "application/json" },
    mode: "cors",
  });
};

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [invalid, setInvalid] = useState("");
  const dispatch = useDispatch();

  const onUserChange = (event) => {
    setUsername(event.target.value);
  };

  const onPassChange = (event) => {
    setPass(event.target.value);
  };

  const onButtonRequest = () => {
    dispatch(startLoading());
    SignInAPI(username, pass)
      .then((response) => {
        if (response.data === false) {
          setInvalid("Wrong Credentials, try again");
          console.log(response);
        } else {
          setInvalid("");
          console.log(response);
        }
        dispatch(cancelLoading());
      })
      .catch((error) => {
        dispatch(cancelLoading());
        alert("Something went wrong, Recorded " + error);
      });
  };

  return (
    <SignInContainer>
      <BoldSpan color="white">Sign In</BoldSpan>
      <InputContainer>
        <Input
          name="username"
          type="text"
          label="Username"
          value={username}
          size="large"
          inputChange={onUserChange}
        />
      </InputContainer>
      <InputContainer>
        <Input
          name="password"
          type="password"
          label="Password"
          value={pass}
          size="large"
          inputChange={onPassChange}
        />
      </InputContainer>
      <ButtonContainer>
        <Button onClick={onButtonRequest} label="Sign In" />
      </ButtonContainer>
      <BoldSpan color="red">{invalid}</BoldSpan>
    </SignInContainer>
  );
};

export default SignIn;
