import React from 'react'
import { FaFacebook, FaGooglePlay, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinkWrapper, FooterLinkItems, FooterLinkContainer, FooterLinkTitle, FooterLink, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';

const FooterSection = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
                <FooterLink>Testimonials</FooterLink>
                <FooterLink>Terms and Conditions</FooterLink>
                <FooterLink>Privacy Policy</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink>Contact</FooterLink>
                <FooterLink>Email</FooterLink>
            </FooterLinkItems>

          </FooterLinkWrapper>

          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink href='https://www.facebook.com/' target='_blank' arial-label='Facebook'>Facebook</FooterLink>
                <FooterLink href='https://www.youtube.com/' target='_blank' arial-label='Youtube'>Youtube</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
          <FooterLinkItems>
              <FooterLinkTitle>Attributes</FooterLinkTitle>
              <FooterLink href="http://www.freepik.com">Image by Freepik</FooterLink>
            </FooterLinkItems>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Slack App
            </SocialLogo>
            <WebsiteRights>G & G © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com' target='_blank' arial-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://www.youtube.com/hQ' target='_blank' arial-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='https://play.google.com/' target='_blank' arial-label='GooglePlay'>
                <FaGooglePlay />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
    </>
  )
}

export default FooterSection
