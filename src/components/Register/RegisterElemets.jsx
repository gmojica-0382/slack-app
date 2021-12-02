import styled from "styled-components";

export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;;
    width: 100%;
    height: 100vh;
    background-image: url('/img/background.jpg');
    background-size:     cover;                
    background-repeat:   no-repeat;
    background-position: center center;

    @media screen and (max-width: 785px) {
        height: 100%;
  }
`
export const RegisterWrapper = styled.div `
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    max-width: 500px;
    height: 100vh;
    background:#ffffff;
    margin: 50px 0 50px 0;

    @media screen and (max-width: 785px) {
        flex-direction: column;
  }
`
export const RegisterForm = styled.form``

export const WrapperLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    height: 80%;
    width: 10vw;
    background-color:grey;
    margin-left: -70px;


    @media screen and (max-width: 785px) {
        flex-direction: row;
        width: 100%;
        margin-left: 0;
    }

`
export const RewrapperLeft = styled.div`

`
export const ReWrapperP = styled.p`
    width: 100%;
    text-align: center;
    letter-spacing: 1.5px;
    font-weight: 900;
`

export const WrapperRight = styled.div`
    width: 100%;
    height: 100%;
    margin-left: 70px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 785px) {
        width: 100%;
        margin-left: 0;
    }


`

export const ResigterHeader = styled.p`
    letter-spacing: 3px;
    margin-top: 20px;
    font-size: 25px;
`

export const RegisterAgreement = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20px 10px 0 10px;
`
export const RegisterCheckbox = styled.input`
    transform: scale(1.5);
    margin-right: 20px;
`
export const RegisterP = styled.p`
    letter-spacing: 3px;
`

export const ResgisterHr = styled.hr``

export const RegisterLabel = styled.label``

export const RegisterInput = styled.input`
    width: 100%;
    min-height: 85px;
    font-size: 20px;
    padding: 20px;
    border:none;
    &:focus{
        outline: none;
        caret-color: green;
        }
`

export const RegisterButton = styled.button`
    color: white;
    background: #666666;
    border: none;
    border-radius: 10px;
    width: 80%;
    margin: 20px  auto 0 auto;
    max-height: 56px;
    min-height: 56px;
    text-align: center;
    line-height: 36px;
    padding: 0 16px;
    transform: translate3d(0,0,0);
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2.5px;
    overflow: hidden;
    box-shadow: none;
    cursor: pointer;
    &:hover{
        opacity: 0.5;
    }

    @media screen and (max-width: 785px) {
        margin: 20px  auto 20px auto;
  }

`