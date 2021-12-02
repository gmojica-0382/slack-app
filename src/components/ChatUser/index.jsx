import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {  MessageButton } from '../ChannelViewer/ChannelViewerElements'
import { ChatChannelChatBody, ChatChannelChatDiv, ChatChannelChatLi, ChatChannelChatUl, ChatChannelCont, ChatChannelHeadWrap, ChatChannelMessageWrap, ChatChannelSender, ChatChannelSTitle, ChatInputDiv, ChatUpperDiv, InputMessage, MyChatChanneBody, MyChatChanneDiv } from '../ChatChannel/ChatChannelElements'
import {FiSend} from 'react-icons/fi'
const ChatUserSec = ({setbodyView}) => {

    const [userMessage, setuserMessage] = useState("")
    const [messageList, setmessageList] = useState("")
    const [listofUsers, setlistofUsers] = useState("")
    const customHeaders =  JSON.parse(localStorage.getItem("headers"))
    const chatId = localStorage.getItem("Cid")
    const UserInfo = JSON.parse(localStorage.getItem("userinfo"))


    const optionsMessages = {
        method: 'GET',
        url: `${process.env.REACT_APP_SLACK_APP_BASE_URL}/messages?receiver_id=${chatId}&receiver_class=User`,
        headers: {'Content-Type': 'application/json', ...customHeaders },
    }

    const optionsUsers = {
        method: 'GET',
        url: `${process.env.REACT_APP_SLACK_APP_BASE_URL}/users`,
        headers: {'Content-Type': 'application/json', ...customHeaders },
    }

    useEffect(() => {

        axios.request(optionsUsers)
        .then(response => {
            if (response.status === 200) {
                setlistofUsers(response.data)
            }
        }).catch()

        const messageonInterval = setInterval(() =>{
            axios.request(optionsMessages)
            .then(response => {
                if (response.status === 200) {
                    setmessageList(response.data.data)
                }
            }).catch()
                 
        }, 3 * 1000)
        
        return () => {
            clearInterval(messageonInterval)
        }

    }, [])

    const sendMessage = async () => {

        if(userMessage === ""){
            return
        }

       const data = {
            "receiver_id": chatId,
            "receiver_class": "User",
            "body": userMessage
        }

        const sendOptions = {
            method: 'POST',
            url: `${process.env.REACT_APP_SLACK_APP_BASE_URL}/messages`,
            headers: {'Content-Type': 'application/json', ...customHeaders},
            data : data
        }


         await axios.request(sendOptions)
        .then(response => {
            if (response.status === 200) {
                setuserMessage("")
                axios.request(optionsMessages)
                .then(response => {
                    if (response.status === 200) {
                        setmessageList(response.data.data)
                    }
                }).catch()
            }
        })
        .catch(error => {               
        })
    }

    const getUserName = () => {
        if(listofUsers !== ""){
            const userUID = listofUsers.data.find( info => {
                    return info.id == chatId

            })
            
            return <ChatChannelSTitle>{userUID.uid}</ChatChannelSTitle>
        }
    }
    return (
        
        <ChatChannelCont>          
             <ChatChannelHeadWrap>
           
           {
               getUserName()
           }
           </ChatChannelHeadWrap>
            <ChatChannelMessageWrap>
                <ChatUpperDiv>
                <ChatChannelChatUl>
                {
                      messageList &&   messageList.map(data => {
                        if(data.sender.id == UserInfo.id){
                            return(
                                <ChatChannelChatLi key={data.id} id={data.id}>
                                <MyChatChanneDiv>
                                    <MyChatChanneBody>{data.body}</MyChatChanneBody>
                                </MyChatChanneDiv>
                            </ChatChannelChatLi>
                            )
                        }
                        return(
        
                            <ChatChannelChatLi key={data.id} id={data.id}>
                                <ChatChannelChatDiv>
                                    <ChatChannelSender>{data.sender.email}</ChatChannelSender>
                                    <ChatChannelChatBody>{data.body}</ChatChannelChatBody>
                                </ChatChannelChatDiv>
                            </ChatChannelChatLi>
                        )
                    })
                }
                </ChatChannelChatUl>
                </ChatUpperDiv>
                <ChatInputDiv>
                    <InputMessage value={userMessage} onChange={e => setuserMessage(e.target.value)} name="message" type="text" placeholder="Send a message" required />
                    <MessageButton onClick={() => sendMessage()}>
                        <FiSend/>
                    </MessageButton>
                </ChatInputDiv>
            </ChatChannelMessageWrap>
        </ChatChannelCont>
    )
}

export default ChatUserSec
