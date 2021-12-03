import React,{useState} from 'react'
import {CgLockUnlock} from 'react-icons/cg'
import {IoPersonOutline} from 'react-icons/io5'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineApple,AiOutlineGithub} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import {useNavigate} from 'react-router-dom'
import {Hr, LoginApple, LoginButton, LoginContainer, LoginFB, LoginForgot, LoginGH, LoginGP, LoginInput, LoginLabel,LoginForm, LoginReWrapper, LoginSubContainer, LogintTitle, LoginWrapper, SocialWrapper, ErrorP } from './LoginElements'
import axios from 'axios'

const LoginComponent = () => {

    let navigate = useNavigate();
    const headers = localStorage.getItem("headers")
    if(headers){
        navigate("/home")
    }

    const [details, setDetails] = useState({email: "", password: ""})
    const [regError, setRegError] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const login = async ()=> {

        const options = {
            method: 'POST',
            url: `${process.env.REACT_APP_SLACK_APP_BASE_URL}/auth/sign_in`,
            headers: {'Content-Type': 'application/json'},
            data: details
        }
    
        await axios.request(options)
        .then(response => {
            if (response.status === 200) {
                localStorage.clear()
                localStorage.setItem("headers", JSON.stringify(response.headers)) 
                localStorage.setItem("userinfo", JSON.stringify(response.data.data))
                navigate('/home')
            }
        })
        .catch(error => {
            console.log(error)
            if (error.response.status >= 400) {
                localStorage.clear()
                setRegError(error.response.status)
                setErrorMessage(error.response.data.errors[0])
            }else{
                localStorage.clear()
                setRegError(6000)
                setErrorMessage("An unkown error has occurred.")
            }
        })
    }
        
    const handleEmailChange = e => {
        setDetails({...details, email: e.target.value})
    }
    
    const handlePasswordChange = e => {
        setDetails({...details, password: e.target.value})
    }
    
    const onSubmitLogin = e => {
        e.preventDefault()

        login()
        setRegError("")
        setErrorMessage("")
    }

    return (
        <LoginWrapper>
            <LoginContainer>
                <LoginSubContainer>
                        <LogintTitle>Login with Social Links</LogintTitle>
                        <SocialWrapper>
                            <LoginApple><AiOutlineApple/> Apple</LoginApple>
                            <LoginFB><FaFacebookF/> Facebook</LoginFB>        
                            <LoginGH><AiOutlineGithub/>  GitHub</LoginGH>
                            <LoginGP><FcGoogle/> Google</LoginGP>
                        </SocialWrapper>           
                    </LoginSubContainer>

                    <LoginSubContainer>
                        <LoginForm onSubmit={onSubmitLogin}>
                            <LogintTitle>Login with Account</LogintTitle>
                            <LoginReWrapper>
                                <IoPersonOutline size={50} />
                                <LoginLabel htmlFor='email'/>
                                    <LoginInput 
                                            email 
                                            type="email"
                                            name="email"
                                            value={details.email} 
                                            onChange={handleEmailChange}
                                            required
                                            placeholder ="Email"
                                    >
                                    </LoginInput>
                            </LoginReWrapper>
                            <Hr/>
                            <LoginReWrapper>
                                <CgLockUnlock size={50} />
                                <LoginLabel htmlFor='password'/>
                                    <LoginInput 
                                        password 
                                        type="password" 
                                        name="password" 
                                        value={details.password} 
                                        onChange={handlePasswordChange}
                                        required
                                        placeholder ="Password"

                                    >
                                    </LoginInput>
                            </LoginReWrapper>
                            {regError && <ErrorP className="error">{errorMessage}</ErrorP>}
                            <LoginForgot>Forgot Password?</LoginForgot>
                            <LoginButton
                                btnSubmit 
                                type="submit"
                            >Login</LoginButton>
                            <LoginForgot onClick={() => navigate("/register")}>New user? Create your new Account</LoginForgot>
                        </LoginForm>
                    </LoginSubContainer>
            </LoginContainer>
        </LoginWrapper>
    )
}

export default LoginComponent
