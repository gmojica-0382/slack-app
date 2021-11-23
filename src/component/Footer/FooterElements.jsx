import { Link } from "react-router-dom";
import styled from "styled-components";


export const FooterContainer =styled.footer`
    background-color:  #262626;
    z-index: 99;
    height: auto;
`

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 150px 0 150px;
    @media screen and (max-width: 1020px) {
    padding: 0 0 0 0;
  }
`

export const FooterUpRewrapper = styled.div`
    display: flex;
    justify-content: center;
    @media screen and (max-width: 1020px) {
        flex-direction: column;
  }
`

export const FooterUpperItems= styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
`

export const FooterUpperTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
    color: white;
    letter-spacing: 3px;
`

export const FooterUpperInternalLinks = styled(Link)`
    color: white;
    text-decoration: none;
    margin-bottom: 5px;
    font-size: 14px;
    &:hover{
        text-decoration: underline;
    }
`

export const FooterUpperExternalLinks = styled.a`
    color: white;
    text-decoration: none;
    margin-bottom: 5px;
    cursor: pointer;
    font-size: 14px;
    &:hover{
        text-decoration: underline;
    }
`

export const FooterLowRewrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1020px) {
    flex-direction: column;
    justify-content: space-between;
  }
`

export const AppLogo = styled(Link)`
    color: white;
    font-size: 25px;
    letter-spacing: 3px;
    cursor: pointer;
    text-decoration: none;
    &:after {    
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: #fff;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
    }
    &:hover { 
      text-decoration: underline;
    }
`

export const AppRights = styled.a`
    color: white;
    font-size: 20px;
    letter-spacing: 3px;
    cursor: pointer;
    @media screen and (max-width: 1020px) {
        margin-top: 20px;
  }
`

export const SocialLinks = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 150px;

    @media screen and (max-width: 1020px) {
        margin-top: 20px;
  }
`

export const SocialWrapper = styled.a`
    color: #fff;
    font-size: 25px;
    cursor: pointer;

`