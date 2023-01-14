import React from "react";
import Navigation from "../../components/navigation/navigation";
import Link from "../../components/link/link";
import { ROUTES } from "../../constants/routes/routes.constants";
import {
  BoldSpan,
  LogoContainer,
  HomePageContainer,
  HomePageContentContainer,
} from "./homepage.styles";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Navigation
        leftComponents={<Link to={ROUTES.ABOUT}>About</Link>}
        rightComponents={<Link to={ROUTES.SIGN_IN}>Sign Up</Link>}
      />
      <HomePageContentContainer>
        <LogoContainer isMainFocus />
        <BoldSpan>AI Based Comment Analyzation Tool</BoldSpan>
      </HomePageContentContainer>
    </HomePageContainer>
  );
};

export default HomePage;
