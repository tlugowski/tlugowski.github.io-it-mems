import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    margin-top: 50px;
    background-color: blue;
  }
`;

export const AboutTitleWrapper = styled.h1`
  margin-top: 24px;
  font-weight: 400px;
`;

export const HomeContainer = styled.div`
  position: flex;
  align-items: center;
  justify-content: center;
  width: calc(100vw - (2 * 155px));
  height: calc(100vh - (2 * 100px));
  margin: 50px;
  background-image: url("https://wallup.net/wp-content/uploads/2016/07/20/26560-Beaker.jpg");
  background-size: calc(100vw - (2 * 35px)) calc(100vh - (2 * 25px));
  background-repeat: no-repeat;
  background-attachment: fixed;

  .about-left {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
  }

  .about-right {
    flex: 1;
  }

  .about-card.bg {
    position: absolute;
    top: 50px;
    left: 50px;
    background-color: #333;
  }

  .about-card {
    margin-top: 300px;
    width: 60%;
    height: 70vh;
    border-radius: 30px;
    position: relative;
    overflow: hidden;
  }

  .about-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .about-award-img {
    width: 120px;
    height: 120px;
    border-radius: 20px;
  }

  .about-sub {
    margin: 20px 0px;
  }

  .about-desc {
    font-weight: 300;
  }

  .about-award {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .about-award-texts {
    width: 70%;
  }

  .about-award-title {
    font-weight: bold;
    color: #555;
    margin-bottom: 10px;
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

    .about-card.bg,
    .about-award {
      display: none;
    }

    .about-right {
      padding: 20px;
    }
  }
`;

export const HeaderWrapper = styled.div`
  font-size: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Helvetica, Arial, Sans-Serif;
  color: white;
  padding-bottom: 125px;
  padding-top: 20px;
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
`;

// @media screen and (min-device-width: 400px) {
//     body {
//       background-image: url('img_flowers.jpg');
//     }
//   }
