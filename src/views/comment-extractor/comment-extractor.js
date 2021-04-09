import React from "react";
import Extractor from "../../api/comment-extractor/extractor";
import Logo from "../../components/logo/logo";
import Navigation from "../../components/navigation/navigation";
import Footer from "../../components/footer/footer";
import MediaSwitch from "../../components/media-switch/media-switch";
import Link from "../../components/link/link";
import { ROUTES } from "../../constants/routes/routes.constants";
import { CommentExtractorContainer } from "./comment-extractor.styles";

const CommentExtractor = () => {
  return (
    <CommentExtractorContainer>
      <Navigation rightComponents={<Link to={ROUTES.DISPLAY}>Analyze</Link>} />
      <Logo isMainFocus />
      <Extractor />
      <Footer rightComponents={<MediaSwitch />} />
    </CommentExtractorContainer>
  );
};

export default CommentExtractor;
