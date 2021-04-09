import React, { useState } from "react";
import axios from "axios";
import { websitePrefix } from "../../../constants/api/api.constants";
import Input from "../../../components/input/input";
import Button from "../../../components/button/button";
import { useDispatch } from "react-redux";
import {
  startLoading,
  cancelLoading,
} from "../../../redux/loading/loading.actions";
import Logo from "../../../components/logo/logo";
import { ROUTES } from "../../../constants/routes/routes.constants";
import {
  SignInContainer,
  ButtonContainer,
  InputContainer,
  BoldSpan,
  LinkStyled,
  SubmitContainer,
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
  })
    .then((response) => response.data)
    .catch((error) => {
      alert("Something went wrong, Recorded " + error);
    });
};

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [invalid, setInvalid] = useState(false);
  let fail = "Wrong credentials, try again.";
  const dispatch = useDispatch();

  const onUserChange = (event) => {
    setUsername(event.target.value);
  };

  const onPassChange = (event) => {
    setPass(event.target.value);
  };

  const onButtonRequest = async () => {
    dispatch(startLoading());
    let resData = await SignInAPI(username, pass);
    !resData["login-success"]
      ? setInvalid(true)
      : console.log(resData["user-dict"]);
    dispatch(cancelLoading());
  };

  return (
    <SignInContainer>
      <Logo />
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
        <Input
          name="password"
          type="password"
          label="Password"
          value={pass}
          size="large"
          inputChange={onPassChange}
        />
      </InputContainer>
      <SubmitContainer>
        {invalid ? (
          <BoldSpan size={20} color="red">
            {fail}
          </BoldSpan>
        ) : (
          <BoldSpan size={20} color="red"></BoldSpan>
        )}
        <ButtonContainer>
          <Button onClick={onButtonRequest} label="Sign In" />
        </ButtonContainer>
        <LinkStyled to={ROUTES.SIGN_UP}>
          New User? Click here to Register
        </LinkStyled>
      </SubmitContainer>
    </SignInContainer>
  );
};

export default SignIn;
