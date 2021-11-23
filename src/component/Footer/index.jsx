import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaFacebook, FaGooglePlay, FaYoutube } from 'react-icons/fa'
import { AppLogo, AppRights, FooterContainer, FooterLowRewrapper, FooterUpperExternalLinks, FooterUpperInternalLinks, FooterUpperItems, FooterUpperTitle, FooterUpRewrapper, FooterWrapper, SocialLinks, SocialWrapper } from './FooterElements'

const FooterSec = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
      }

    return (
       <FooterContainer>
           <FooterWrapper>
                <FooterUpRewrapper>
                    <FooterUpperItems>
                        <FooterUpperTitle>About us</FooterUpperTitle>
                        <FooterUpperInternalLinks to="/">Terms and Conditions</FooterUpperInternalLinks>
                        <FooterUpperInternalLinks to="/">Privacy Policy</FooterUpperInternalLinks>
                    </FooterUpperItems>
                    <FooterUpperItems>
                        <FooterUpperTitle>Contact Us</FooterUpperTitle>
                        <FooterUpperInternalLinks to="/">Email</FooterUpperInternalLinks>
                        <FooterUpperInternalLinks to="/">Chat Bot</FooterUpperInternalLinks>
                        <FooterUpperInternalLinks to="/">Forum</FooterUpperInternalLinks>
                    </FooterUpperItems>
                    <FooterUpperItems>
                        <FooterUpperTitle>Social Media</FooterUpperTitle>
                        <FooterUpperExternalLinks to="/">Facebook</FooterUpperExternalLinks>
                        <FooterUpperExternalLinks to="/">Twitter</FooterUpperExternalLinks>
                        <FooterUpperExternalLinks to="/">GitHub</FooterUpperExternalLinks>
                    </FooterUpperItems>
                    <FooterUpperItems>
                        <FooterUpperTitle>Developers</FooterUpperTitle>
                        <FooterUpperExternalLinks to="/">Germain</FooterUpperExternalLinks>
                        <FooterUpperExternalLinks to="/">Godynheil</FooterUpperExternalLinks>
                    </FooterUpperItems>
                </FooterUpRewrapper>
                <FooterLowRewrapper>
                    <AppLogo to="/" onClick={toggleHome}>
                        Slack App
                    </AppLogo>
                    <AppRights>
                        G &#38; G © 2021 All rights reserved.
                    </AppRights>
                    <SocialLinks>
                        <SocialWrapper>
                            <FaFacebook/>
                        </SocialWrapper>
                        <SocialWrapper>
                            <FaGooglePlay/>
                        </SocialWrapper>
                        <SocialWrapper>
                            <FaYoutube/>
                        </SocialWrapper>
                    </SocialLinks>
                </FooterLowRewrapper>
           </FooterWrapper>
       </FooterContainer>     
    )
}

export default FooterSec
