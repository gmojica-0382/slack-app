import styled from "styled-components"

export const LoginWrapper = styled.div`
    display: flex;
    background: white;
    border-radius: 10px;
    @media screen and (max-width: 960px) {
        margin: 50px 0 30px 0;
  }

`


export const LoginContainer = styled.div`
    margin: 20px;
    display: flex;
    @media screen and (max-width: 724px) {
    transition: 0.8s all ease;
    flex-direction: column-reverse;
  }

`
export const LoginForm = styled.form`
    height: 100%;
`


export const LoginSubContainer = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;

`

export const LoginReWrapper = styled.div`
    display: flex;
    align-items: center;
    background: white;

`
export const LoginForgot = styled.p`
    text-align:right;
    margin-top: 20px;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
`
export const LogintTitle = styled.p``

export const Hr = styled.hr``

export const LoginLabel = styled.label``

export const LoginInput = styled.input`
    border:none;
    width: 100%;
    min-height: 85px;
    width: 355px;
    font-size: 20px;
    padding-left:10px;
    font-family: "TT Commons", Roboto, sans-serif;
    background: white;

    &:focus{
        outline: none;
        caret-color: green;
        }

    @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const LoginButton = styled.button`
    color: white;
    background: #666666;
    border: none;
    border-radius: 10px;
    width: 100%;
    max-height: 56px;
    margin: 10px;
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

    @media screen and (max-width: 960px) {
        margin: auto;
        margin-top:10px;
  }

`

//Login Lnks

export const SocialWrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 726px) {
        flex-direction: row;
        flex-wrap: wrap;
        >a{
             margin: 2px;
            }
  }
`
export const ErrorP = styled.p`
    color: red;
`


export const LoginApple = styled.a`
    border-radius: 50px;
    background: #cbcdd4;
    white-space: nowrap;
    padding: 10px 22px;
    color: black;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-top:20px;
    min-width: 135px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #eaecef;
        color: #010606;
    }
`
export const LoginFB = styled.a`

  border-radius: 50px;
  background: #4267b2;
  white-space: nowrap;
  padding: 10px 22px;
  color: black;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-top:20px;
  min-width: 135px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #eaecef;
    color: #010606;
  }
`

export const LoginGH = styled.a`
    border-radius: 50px;
    background: #1971c2;
    white-space: nowrap;
    padding: 10px 22px;
    color: black;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-top:20px;
    min-width: 135px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #eaecef;
        color: #010606;
    }
`

export const LoginGP = styled.a`
    border-radius: 50px;
    background: red;
    white-space: nowrap;
    padding: 10px 22px;
    color: black;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-top:20px;
    min-width: 135px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #eaecef;
        color: #010606;
    }
`