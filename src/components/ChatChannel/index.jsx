import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { CardPrag } from '../Channels/CardElements'
import { CardMemberLi, CardMemberList, CardMemberUl, MessageButton } from '../ChannelViewer/ChannelViewerElements'
import { ChatChannelChatBody, ChatChannelChatDiv, ChatChannelChatLi, ChatChannelChatUl, ChatChannelCont, ChatChannelHeadWrap, ChatChannelMemeberWrap, ChatChannelMessageWrap, ChatChannelMTitle, ChatChannelSender, ChatChannelSTitle, ChatInputDiv, ChatUpperDiv, InputMessage, MyChatChanneBody, MyChatChanneDiv } from './ChatChannelElements'
import {FiSend} from 'react-icons/fi'
import CardNewMember from '../NewMember'
import { bodyStateCons } from '../Config'
const ChatChannelSec = ({setbodyView}) => {

    const [channelDetails, setchannelDetails] = useState("")
    const [userMessage, setuserMessage] = useState("")
    const [listofUsers, setlistofUsers] = useState("")
    const [messageList, setmessageList] = useState("")
    const customHeaders =  JSON.parse(localStorage.getItem("headers"))
    const channelId = localStorage.getItem("id")
    const UserInfo = JSON.parse(localStorage.getItem("userinfo"))
    const [cardState, setcardState] = useState({modal: false, id: channelId})


    const optionsMessages = {
        method: 'GET',
        url: `${process.env.REACT_APP_SLACK_APP_BASE_URL}/messages?receiver_id=${channelId}&receiver_class=Channel`,
        headers: {'Content-Type': 'application/json', ...customHeaders },
    }

    useEffect(() => {

        const options = {
            method: 'GET',
            url: `${process.env.REACT_APP_SLACK_APP_BASE_URL}/channels/${channelId}`,
            headers: {'Content-Type': 'application/json', ...customHeaders},
        }

        const optionsUsers = {
            method: 'GET',
            url: `${process.env.REACT_APP_SLACK_APP_BASE_URL}/users`,
            headers: {'Content-Type': 'application/json', ...customHeaders },
        }


        axios.request(options)
        .then(response => {
            if (response.status === 200) {
              setchannelDetails(response.data)
            }
        })
        .catch(error => {               
        })

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
            "receiver_id": channelId,
            "receiver_class": "Channel",
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
    const getUserName = (userId) => {
        if(listofUsers.data){
            const userName =  listofUsers.data.find(function (el) {
                return el.id === userId
                    
            });

            if( userName === undefined){
                return "Unknown User"
            }
        
            return userName.uid
        }
    }

    const getChannelDBInfo = () => {
        if(channelDetails !== ""){
            return <ChatChannelSTitle>{channelDetails.data.name}</ChatChannelSTitle>
        }
    }

    const messageClick = (e) =>{
        localStorage.setItem("Cid", e.target.id)
        setbodyView(bodyStateCons.chatUser)
    }

    return (
        
        <ChatChannelCont>
            <CardNewMember cardInfo={cardState} setCardInfo={setcardState}/>
          
            <ChatChannelHeadWrap>
           
            {
                getChannelDBInfo()
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
            <ChatChannelMemeberWrap>
            <ChatChannelMTitle>Members<MessageButton onClick={()=> setcardState({modal: true, id: channelId})}>Add</MessageButton></ChatChannelMTitle>
            <CardMemberUl>
            {
                 channelDetails && channelDetails.data.channel_members.map(memberInfo =>{
                    return <CardMemberLi key ={memberInfo.user_id} id={memberInfo.user_id}>
                                 <CardMemberList>
                                     <CardPrag>
                                     {getUserName(memberInfo.user_id)}
                                     </CardPrag>
                                     <MessageButton id={memberInfo.user_id} onClick={e => messageClick(e)}>
                                         Message
                                     </MessageButton>
                                 </CardMemberList>
                         </CardMemberLi>
                 })
            }
            </CardMemberUl>
            </ChatChannelMemeberWrap>
            
        </ChatChannelCont>
    )
}

export default ChatChannelSec
