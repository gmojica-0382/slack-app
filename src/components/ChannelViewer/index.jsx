import axios from 'axios';
import React,{useEffect, useState} from 'react'
import Modal from 'react-modal'
import { CardHead, CardIcon, CardPrag, CardSubHead, CardWrapper } from '../Channels/CardElements';
import { bodyStateCons } from '../Config';
import { CardMemberLi, CardMemberList, CardMemberUl, CloseViewer, MessageButton, ModalHeader, ModalWrapper } from './ChannelViewerElements';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

const CardChannel = ({channelInfo, modalState, setbodyView}) => {
    const customHeaders =  JSON.parse(localStorage.getItem("headers"))
    const [channelDetail, setchannelDetail] = useState("")

    useEffect(() => {
        if(channelInfo.modal){
            
            const options = {
                method: 'GET',
                url: `${process.env.REACT_APP_SLACK_APP_BASE_URL}/channels/${channelInfo.id}`,
                headers: {'Content-Type': 'application/json', ...customHeaders},
            }
        
            axios.request(options)
            .then(response => {
                if (response.status === 200) {
                  setchannelDetail(response.data)
                }
            })
            .catch(error => {               
            })

        }
        
    }, [channelInfo])

    const getUserName = (userId) => {
        if(channelInfo.modal){

            const userName =  channelInfo.listofU.data.find(function (el) {
                return el.id === userId
                    
            });

            if( userName === undefined){
                return "Unknown User"
            }
        
            return userName.uid
        }
    }

    const setChatChannel = (e) =>{
        setbodyView(bodyStateCons.chatChannel)
        localStorage.setItem("id", e.target.id)
    }

    const messageClick = (e) =>{
        localStorage.setItem("Cid", e.target.id)
        setbodyView(bodyStateCons.chatUser)
    }

    const getChannelDetails = () => {
        if(channelDetail !== ""){
            return(
                <>
                <CardIcon id={channelDetail.data.id} src={`https://avatars.dicebear.com/api/bottts/${channelInfo.id}.svg`}/>
                <CardHead id={channelDetail.data.id}>{channelDetail.data.name}</CardHead>
                <CardSubHead id={channelDetail.data.id}>Owner: {getUserName(channelDetail.data.owner_id)}</CardSubHead>
                <CardPrag id={channelDetail.data.id}>Date of Creation: {new Date(channelDetail.data.created_at).toLocaleDateString("en-US")}</CardPrag>
                <MessageButton id={channelDetail.data.id} onClick={e=> setChatChannel(e)}>Visit</MessageButton>
                <CardHead id={channelDetail.data.id}>Members</CardHead>

                <CardMemberUl>
                {
                    channelDetail.data.channel_members.map(memberInfo =>{
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
                </>
            )
        }

    }

    return (
        <Modal
        isOpen={channelInfo.modal}
        ariaHideApp={false}
        style={customStyles}
        >
            <ModalWrapper>
                <ModalHeader>
                    <CloseViewer onClick={()=>modalState({modal:false})}>Close</CloseViewer>
                </ModalHeader>
                <CardWrapper>
                {
                    getChannelDetails()
                }                
            </CardWrapper>
            </ModalWrapper>
            
        </Modal>
    )
}

export default CardChannel
