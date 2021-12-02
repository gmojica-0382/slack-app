import styled from "styled-components";

export const ChatChannelCont = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: auto 30%;
    grid-template-rows: auto 90%;
    grid-template-areas: 
    "head head"
    "main members"
    ;
`

export const ChatChannelHeadWrap = styled.div`
    padding-left: 20px;
    grid-area: head;
`

export const ChatChannelMessageWrap = styled.div`
    grid-area: main;
    height: 100%;
    padding: 10px;
    display: grid;
    grid-template-rows: 90% 10%;
    grid-template-areas: "chats""input";
`
export const ChatChannelMemeberWrap = styled.div`
    grid-area: members;
    height: 100%;
    overflow: auto;
`

export const ChatUpperDiv = styled.div`
    grid-area:chats ;
    overflow: auto;

`

export const ChatInputDiv = styled.div`
    grid-area: input;

`

export const ChatChannelSTitle = styled.p`
    color: black;
    font-size: 30px;
    text-align: left;
    margin-top:30px;
    letter-spacing: 4px;
    font-family: "TT Commons", Roboto, sans-serif;
`

export const ChatChannelMTitle = styled.p`
    color: black;
    font-size: 20px;
    text-align: center;
    margin-top:30px;
    letter-spacing: 4px;
    font-family: "TT Commons", Roboto, sans-serif;
`

export const ChatChannelChatUl = styled.ul``

export const ChatChannelChatLi = styled.li`
        margin-top: 5px;
        width: auto;

`

export const MyChatChanneDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export const MyChatChanneBody = styled.p`
    padding: 8px;
    border-radius: 14px;
    font-size: 20px;
    width: fit-content;
    background-color: #90c1f1;
`

export const ChatChannelChatDiv = styled.div`
    display: flex;
    flex-direction: column;
`
export const ChatChannelSender = styled.p``
    
export const ChatChannelChatBody = styled.p`
    padding: 8px;
    border-radius: 14px;
    font-size: 20px;
    width: fit-content;
    background-color: #c5ccd3;
`
export const InputMessage = styled.input`
    outline: none;
    border:none;
    border-bottom: 2px solid black;
    padding: 10px;
    margin:10px;
    height: 30px;
    width: 80%;
    font-size: 16px;

`

export const SendButton = styled.button``
