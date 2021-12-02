import styled from "styled-components";

export const LandingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;;
    width: 100%;
    height: 100%;
    background-image: url('/img/background.jpg');
    background-size:     cover;                
    background-repeat:   no-repeat;
    background-position: center center;

    @media screen and (max-width: 960px) {
        height: 100%;
  }
`

export const WelcomeTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
`
export const LandingTitle = styled.p`
    color: white;
    font-size: 30px;
    font-family: "Roboto", sans-serif;
    letter-spacing: 5px;
    font-weight: 500;
    @media screen and (max-width: 960px) {
        margin-top: 30px;
  }
`
export const LandingsubTitle = styled.p`
    color: white;
    font-size: 50px;
    width: 80vw;
    font-weight: bold;
    text-align: center;
    margin-top:30px;
    letter-spacing: 4px;
    font-family: "TT Commons", Roboto, sans-serif;

    @media screen and (max-width: 960px) {
        font-size: 40px;
  }

`
