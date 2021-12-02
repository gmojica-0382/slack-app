import styled from "styled-components";

export const ModalWrapper = styled.form`
    width: 530px;   
    max-height: 65vh; 
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
`


export const ModalHeader = styled.div`
    display:flex;
    height: 50px;
    width: 100%;
    margin-bottom:  15px;
    background:#eb675e;
    align-items: center;
    justify-content: flex-end;
  
`
export const CloseViewer = styled.button`
    width: 100px;
    border-radius:42px;
    border: none;
	display:inline-block;
	cursor:pointer;
    color:white;
	background-color:#e4685d;
	font-family:Arial;
	font-size:18px;
	font-weight:bold;
	padding-top:10px;
    padding-bottom:10px;
	text-decoration:none;
    margin-right: 25px;
    &:hover{
        opacity: 0.5;
    }
`
export const CardMemberUl = styled.ul`
    width: 100%;
    overflow: auto;
`
export const CardMemberLi = styled.li`
    width: 100%;
`

export const CardMemberList = styled.div`
    margin-top:10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const MessageButton = styled.a`
    background-color:#44c767;
	border-radius:18px;
	border:1px solid #18ab29;
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