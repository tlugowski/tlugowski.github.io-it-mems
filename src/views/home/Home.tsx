import React from "react";
import { HeaderWrapper, HomeContainer, TextWrapper } from "./home.components";
// import { ContainerNotFound, TextWrapper } from "./home.components";

const Home: React.FC = () => {
  return (
    <div>
      <HomeContainer>
        <HeaderWrapper>Welcome to IT MEMS! 👨‍💻</HeaderWrapper>
        <TextWrapper>
          👀 I'd like to make the world a better place...
        </TextWrapper>
        <TextWrapper>but they won't give me the source code.</TextWrapper>

      </HomeContainer>
    </div>
  );
};

export default Home;
