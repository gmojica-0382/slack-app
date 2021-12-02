import React from 'react'
import LoginComponent from '../Login'
import {LandingsubTitle, LandingTitle, LandingWrapper, WelcomeTextWrapper} from './LandingElements'

const LandingSection = () => {
    return (
        <>
        <LandingWrapper>
            <WelcomeTextWrapper>
                <LandingTitle>WELCOME!</LandingTitle>
                <LandingsubTitle>Transform the way you work with one place for everyone and everything you need to get stuff done.</LandingsubTitle>
            </WelcomeTextWrapper>
            <LoginComponent/>
        </LandingWrapper>
            
        </>
    )
}

export default LandingSection
