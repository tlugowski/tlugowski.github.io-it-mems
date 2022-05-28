import styled from "styled-components";

export const JustifyCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    margin-top: 5px;
  }
`;

export const AboutTitleWrapper = styled.h1`
  margin-top: 100px;
  font-weight: 400px;
`;

export const LeftAos = styled(JustifyCenter)`
  flex: 1;
  position: relative;
  height: 100%;
  margin-top: 224px;

  @media (max-width: 768px) {
    height: 15%;
    margin-top: 280px;
  }
`;

export const RightAos = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    margin-top: 300px;
  }
`;

export const AboutCard = styled.div`
  margin-top: 300px;
  width: 60%;
  height: 70vh;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
`;

export const AboutImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AboutCardBg = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
  background-color: #333;
`;

export const AboutSub = styled.p`
  margin: 20px 0px;
`;

export const AboutDesc = styled.p`
  font-weight: 300;
`;

export const AboutAwardDesc = styled(AboutDesc)``;

export const AboutAward = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AboutAwardImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 20px;
`;

export const AboutAwardTexts = styled.div`
  width: 70%;
`;

export const AboutAwardTitle = styled.h4`
  font-weight: bold;
  color: #555;
  margin-bottom: 10px;
`;

export const HomeContainer = styled.div`
  position: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - (2 * 80px));
  height: calc(100vh - (2 * 100px));
  margin: 100px auto 0 auto;
  background-image: url("https://wallup.net/wp-content/uploads/2016/07/20/26560-Beaker.jpg");
  background-size: calc(100vw - (2 * 35px)) calc(100vh - (2 * 25px));
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media (max-width: 768px) {
    width: calc(100% - (2 * 40px));
  }

  @media screen and (max-width: 480px) {
    .about {
      flex-direction: column;
      text-align: center;
      margin-top: 50px;
    }

    .about-left {
      width: 100%;
    }

    .about-card {
      height: 30vh;
    }

    .about-card-bg,
    .about-award {
      display: none;
    }

    .about-right {
      padding: 20px;
    }
  }
`;

export const HeaderWrapper = styled(JustifyCenter)`
  font-size: 48px;
  font-family: Helvetica, Arial, Sans-Serif;
  color: white;
  padding-bottom: 125px;
  padding-top: 20px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const TextWrapper = styled.div`
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: left;
  font-family: Helvetica, Arial, Sans-Serif;
  color: white;
  padding-bottom: 25px;
  padding-left: 80px;
  padding-top: 20px;
  @media (max-width: 768px) {
    font-size: 24px;
    padding-left: 10px;
  }
`;
