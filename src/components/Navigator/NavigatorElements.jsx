import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Nav = styled.nav`
    position: sticky;
    top:0;
    z-index: 1;
    background: #262626;
    height: 80px;
    width: 100%;
    padding: 0 20px 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const AppName = styled.p`
    font-size: 2rem;
    margin-left: 30px;
    color: white;
    cursor: pointer;
`

export const RegisterButton = styled(Link)`
    color: white;
    transition: all .2s ease;
    cursor: pointer;
    min-width: 88px;
    text-align: center;
    border-radius: 3px;
    border: 2px solid;
    font-size: 20px;
    outline: 0;
    padding: 5px 25px;
    height: auto;
    margin-right: 30px;
    text-decoration: none;
    &:hover{
        background: white;
        color: black;
    }
`