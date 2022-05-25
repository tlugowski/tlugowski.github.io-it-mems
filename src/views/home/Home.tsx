import React, { useEffect } from "react";
import { AboutContainer, AboutTitleWrapper, HeaderWrapper, HomeContainer, TextWrapper } from "./home.components";
//  import { ContainerNotFound, TextWrapper } from "./home.components";
import itCrowdImg from "../../images/itcrowd.png";
import robotImg from "../../images/robot.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Home: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <HomeContainer>
        <HeaderWrapper>Welcome to IT ME👀MS!</HeaderWrapper>
        <TextWrapper>
          💪 I'd like to make the world a better place...
        </TextWrapper>
        <TextWrapper>but they won't give me the source code.</TextWrapper>
        <AboutContainer>
          <div data-aos="fade-right" className="about-left">
            <div className="about-card bg"></div>
            <div className="about-card">
              <img src={itCrowdImg} alt="" className="about-img" />
            </div>
          </div>
          <div data-aos="fade-left" className="about-right">
            <AboutTitleWrapper>And a short introduction..</AboutTitleWrapper>
            <p className="about-sub">Find what you need!</p>
            <p className="about-desc">
              Welcome IT friend! You don't have to search the net for cool memes
              related to the IT sector anymore - we did it for you. We created
              an interesting place where you can satisfy your dose of laughter
              through thematic jokes.Here you will loop your curiosity and be
              able to share the experience with your friends. All jokes about
              programmers IT people in one place! We invite you to join the fun!
            </p>
            <div className="about-award">
              <img src={robotImg} alt="" className="about-award-img" />
              <div className="about-award-texts">
                <h4 className="about-award-title">ADD YOUR MEMS!</h4>
                <p className="about-award-desc">
                  You can easily add your own meme. Provide a title, tag
                  yourself, paste the link, click send and that's it!
                </p>
              </div>
            </div>
          </div>
        </AboutContainer>
      </HomeContainer>
    </div>
  );
};

export default Home;
