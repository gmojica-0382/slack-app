import styled from "styled-components";

export const NewChannelContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`
export const HeadWrapper = styled.div`
    margin: 2vh 20vw 0 0;
    display: flex;
    justify-content: flex-end;
`

export const ChannelCreate = styled.a`
    background-color:#44c767;
	border-radius:18px;
	border:1px solid #18ab29;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:20px;
	padding:6px 31px;
	text-decoration:none;
    &:hover{
        opacity: 0.5;
    }

`
export const NewChannelTitle = styled.p`
    margin: 20px auto 10px auto;
    color: black;
    font-size: 30px;
    font-family: "Roboto", sans-serif;
    letter-spacing: 5px;
    font-weight: 500;
`
export const NewChannelSTitle = styled.p`
    color: black;
    font-size: 40px;
    width: 80vw;
    font-weight: bold;
    text-align: center;
    margin-top:30px;
    letter-spacing: 4px;
    font-family: "TT Commons", Roboto, sans-serif;
`

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: flex-start;    
`

export const NewChannelForm = styled.form`
    height: 100%;
`

export const NewChannelLabel = styled.label``

export const NewChannelInput = styled.input`
    border:none;
    width: 100%;
    min-height: 85px;
    width: 355px;
    font-size: 20px;
    padding-left:10px;
    font-family: "TT Commons", Roboto, sans-serif;
    color: black;
    caret-color: green;
    border-bottom: 2px solid black;

    &:focus{
        outline: none;
        caret-color: green;
        }

`

export const NewChannelMember =  styled.h2`
    margin-top: 30px;
`

export const NewChannleInfo = styled.p`
    margin: 10px auto 10px auto;

`

export const NewChannelUl = styled.ul`
    width: 100%;
    overflow: auto;
`
export const NewChannelLi = styled.li`
    width: 100%;
`

export const NewChannelSeparator = styled.div`
    margin-top:10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const NewChannelError = styled.p`
    margin: 10px auto 10px auto;
	color:#f74b17;
`

export const RemoveButton = styled.a`
    background-color:#f74b17;
	border-radius:18px;
	border:1px solid #f74b17;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:14px;
	padding:6px 31px;
	text-decoration:none;
    &:hover{
        opacity: 0.5;
    }

`