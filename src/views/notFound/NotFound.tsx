import React from "react";
import { ContainerNotFound, TextWrapper } from "./notFound.components";

const NotFound: React.FC = () => {
  return (
    <ContainerNotFound>
      <TextWrapper>Unfortunately 404 Page not found</TextWrapper>
    </ContainerNotFound>
  );
};

export default NotFound;
