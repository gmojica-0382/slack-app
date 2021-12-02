import React, {useState} from 'react'
import {DiHtml5Connectivity} from 'react-icons/di'
import {RiStackshareLine} from 'react-icons/ri'
import {FaSearchengin} from 'react-icons/fa'
import { RegisterAgreement, RegisterButton, RegisterCheckbox, RegisterContainer, RegisterForm,RegisterInput, RegisterLabel, RegisterP, RegisterWrapper, ResigterHeader, RewrapperLeft, ReWrapperP, WrapperLeft, WrapperRight } from './RegisterElemets'
import { ErrorP, Hr } from '../Login/LoginElements'
import axios from 'axios'

const RegisterSection = () => {

    const [details, setDetails] = useState({email: "", password: "", password_confirmation:""})
    const [notifStatus, setNotifStatus] = useState("")
    const [message, setMessage] = useState("")
    
    const register = async () => {
        const options = {
            method: 'POST',
            url: `${process.env.REACT_APP_SLACK_APP_BASE_URL}/auth`,
            headers: {'Content-Type': 'application/json'},
            data: JSON.stringify(details)
        }
    
        axios.request(options)
        .then(response => {
            if (response.status === 200 && response.data.status === "success") {
                setNotifStatus("200")
                setMessage("Register success! You can now login.")
                setDetails({email: "", password: "", password_confirmation:""})

            }
        })
        .catch(error => {
            if (error.response.status === 422 && error.response.data.status === "error") {
                setNotifStatus(error.response.status)

                const errorList = (error.response.data.errors.full_messages)
                setMessage(errorList.map(msg => {
                    return <li>{msg}</li>
                }))
            }
        })
    }
        
    const handleEmailChange = e => {
        setDetails({...details, email: e.target.value})

    }
    
    const handlePasswordChange = e => {
        setDetails({...details, password: e.target.value})
    }

    const handleConfirmPasswordChange = e => {
        setDetails({...details, password_confirmation: e.target.value})
    }
    
    const onSubmitLogin = e => {
        e.preventDefault()
        setNotifStatus("")
        setMessage("")

        if(details.password !== details.password_confirmation){
            setNotifStatus(200)
            setMessage("Password and Confirm password does not match.")
            return
        }
        register()
    }


    return (
        <>
            <RegisterContainer>
                <RegisterWrapper>
                    <WrapperLeft>
                            <RewrapperLeft>
                                <DiHtml5Connectivity size={100} color={'#fbc223'} />
                                <ReWrapperP>Connect</ReWrapperP>
                            </RewrapperLeft>
                            <RewrapperLeft>
                                <RiStackshareLine size={100} color={'#ff6d4c'}/>
                                <ReWrapperP>Share</ReWrapperP>
                            </RewrapperLeft>
                            <RewrapperLeft>
                                <FaSearchengin size={100} color={'#00aeb1'}/>
                                <ReWrapperP>Discover</ReWrapperP>
                            </RewrapperLeft>
                        </WrapperLeft>
                    <WrapperRight>
                        <RegisterForm onSubmit={onSubmitLogin}>
                            <ResigterHeader>Sign up</ResigterHeader>
                            {notifStatus && <ErrorP className="notif">{message}</ErrorP>}
                            <RegisterLabel>
                                <RegisterInput  
                                  email 
                                  type="email" 
                                  name="email"
                                  value={details.email} 
                                  onChange={handleEmailChange}
                                  placeholder="E-mail address" 
                                  required
                                  />
                            </RegisterLabel>
                            <Hr/>
                            <RegisterLabel>
                                <RegisterInput 
                                    type="password" 
                                    name="password"
                                    value={details.password} 
                                    onChange={handlePasswordChange}
                                    placeholder="Password" 
                                    required
                                />
                            </RegisterLabel>
                            <Hr/>
                            <RegisterLabel>
                                <RegisterInput  
                                placonsfirmPassword 
                                type="password" 
                                name="conpassword"
                                value={details.password_confirmation} 
                                onChange={handleConfirmPasswordChange}
                                placeholder="Confirm Password" 
                                required
                                />
                            </RegisterLabel>
                            <Hr/>
                            <RegisterAgreement>
                                <RegisterCheckbox type="checkbox" required/>
                                <RegisterP> By creating your account, you agree to our <a href="/">Terms of Use</a> &amp; <a href="/">Privacy Policy</a>
                                </RegisterP>
                            </RegisterAgreement>
                            <RegisterButton btnSubmit type="submit">Let's Go!</RegisterButton>
                        </RegisterForm>
                    </WrapperRight>
                </RegisterWrapper>

            </RegisterContainer>
        </>
    )
}

export default RegisterSection
