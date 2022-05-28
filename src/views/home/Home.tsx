import React, { useEffect } from "react";
import {
  AboutAward,
  AboutAwardDesc,
  AboutAwardImg,
  AboutAwardTexts,
  AboutAwardTitle,
  AboutCard,
  AboutCardBg,
  AboutContainer,
  AboutDesc,
  AboutImg,
  AboutSub,
  AboutTitleWrapper,
  HeaderWrapper,
  HomeContainer,
  LeftAos,
  RightAos,
  TextWrapper,
} from "./home.components";
import itCrowdImg from "../../images/itcrowd.png";
import robotImg from "../../images/robot.png";
import Aos from "aos";
import "aos/dist/aos.css";

const aosDealyDuration = 2000;

const Home: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: aosDealyDuration });
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
          <LeftAos data-aos="fade-right" className="about-left">
            <AboutCardBg className="about-card-bg"></AboutCardBg>
            <AboutCard className="about-card">
              <AboutImg src={itCrowdImg} alt="" className="about-img" />
            </AboutCard>
          </LeftAos>
          <RightAos data-aos="fade-left" className="about-right">
            <AboutTitleWrapper>And a short introduction..</AboutTitleWrapper>
            <AboutSub className="about-sub">Find what you need!</AboutSub>
            <AboutDesc className="about-desc">
              Welcome IT friend! You don't have to search the net for cool memes
              related to the IT sector anymore - we did it for you. We created
              an interesting place where you can satisfy your dose of laughter
              through thematic jokes.Here you will loop your curiosity and be
              able to share the experience with your friends. All jokes about
              programmers IT people in one place! We invite you to join the fun!
            </AboutDesc>
            <AboutAward className="about-award">
              <AboutAwardImg
                src={robotImg}
                alt=""
                className="about-award-img"
              />
              <AboutAwardTexts className="about-award-texts">
                <AboutAwardTitle className="about-award-title">
                  ADD YOUR MEMS!
                </AboutAwardTitle>
                <AboutAwardDesc className="about-award-desc">
                  You can easily add your own meme. Provide a title, tag
                  yourself, paste the link, click send and that's it!
                </AboutAwardDesc>
              </AboutAwardTexts>
            </AboutAward>
          </RightAos>
        </AboutContainer>
      </HomeContainer>
    </div>
  );
};

export default Home;
