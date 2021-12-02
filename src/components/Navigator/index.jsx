import React,{useEffect} from 'react'
import {IconContext} from 'react-icons/lib'
import { AppName, Nav, RegisterButton } from './NavigatorElements'
import {useNavigate} from 'react-router-dom'

const LandingNav = () => {
    return (
        <>
        <IconContext.Provider value={{ color: '#fffff'}}>
            <Nav>
                <AppName>Slack App</AppName>
                <RegisterButton to="/register">
                    Register
                </RegisterButton>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export const RegisterNav = () => {
    return (
        <>
        <IconContext.Provider value={{ color: '#fffff'}}>
            <Nav>
                <AppName>Slack App</AppName>
                <RegisterButton to="/">
                    Login
                </RegisterButton>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export const HomeNav = () => {
    let navigate = useNavigate();

    useEffect(() => {

        let userInfo = localStorage.getItem("headers");

        if(userInfo === null){
            navigate("/");
        }
        return () => {
         
        }
    }, [navigate])
  

    return (
        <>
        <IconContext.Provider value={{ color: '#fffff'}}>
            <Nav>
                <AppName>Slack App</AppName>
                <RegisterButton to="/" onClick={ ()=> localStorage.clear()}>
                    Log out
                </RegisterButton>
            </Nav>
        </IconContext.Provider>
        </>
    )
}


export default LandingNav
