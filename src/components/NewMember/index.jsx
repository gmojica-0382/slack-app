import axios from 'axios';
import React,{useEffect, useState} from 'react'
import Modal from 'react-modal'
import { CardHead, CardWrapper } from '../Channels/CardElements';
import {  CloseViewer, ModalHeader, ModalWrapper } from '../ChannelViewer/ChannelViewerElements';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import Swal from 'sweetalert2'
import { NewChannelLi, NewChannelMember, NewChannelUl, NewChannleInfo, RemoveButton,NewChannelSeparator, HeadWrapper, ChannelCreate } from '../NewChannel/NewChannelElements';
import { NewMemberConainter } from './NewMemberElements';

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

const CardNewMember = ({cardInfo, setCardInfo}) => {
    const customHeaders =  JSON.parse(localStorage.getItem("headers"))
    const [channelDetail, setchannelDetail] = useState("")
    const [listofUsers, setlistofUsers] = useState("")
    const [listofNew, setListofNew] = useState([])
    const [errorCode, seterrorCode] = useState(false)
    const [errorName, seterrorName] = useState(


    useEffect(() => {

        if(cardInfo.modal){
            console.log("showModal")
            
            const options = {
                method: 'GET',
                url: `${process.env.REACT_APP_SLACK_APP_BASE_URL}/channels/${cardInfo.id}`,
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
                  setchannelDetail(response.data)
                  console.log(response.data)
                }
            })
            .catch(error => {               
            })

            axios.request(optionsUsers)
            .then(response => {
                if (response.status === 200) {
                    setlistofUsers(response.data)
                }
            }).catch(error => console.log(error))
    
            return () => {
                setListofNew("")
            }
        }
      
    
    }, [cardInfo]))


    const handleOnHover = (result) => {
        // the item hovered
      }
    
      const handleOnFocus = () => {
      }

    const handleOnSearch = (string, results) => {
    }
    
      const handleOnSelect = (item) => {
        // the item selected
        setListofNew( listofNew => ([...listofNew, item]))
       
      }
    
      const formatResult = (item) => {
        // return item
        return (<p dangerouslySetInnerHTML={{__html: '<strong>'+item+'</strong>'}}></p>); //To format result as html
      }

    const removeUser = e =>{
        const filtereredUser =  listofNew.filter(function (el) {return el.id != e.target.id});
        console.log(e.target.id)
        
        setListofNew([...filtereredUser])

    }

    const onSubmit = async () => {
        if(listofNew.length === 0){
            Swal.fire(
                'Error!',
                'Please add a Member!',
                'error',
                'OK'
              )

            return
        }

        listofNew.map(info => {

            const data = {
                "id": cardInfo.id,
                "member_id": info.id
            }  

            console.log(data)
    
            const options = {
                method: 'POST',
                url: `${process.env.REACT_APP_SLACK_APP_BASE_URL}/channel/add_member`,
                headers: {'Content-Type': 'application/json', ...customHeaders},
                data: JSON.stringify(data)
            }


            axios.request(options)
            .then(response => {
                    if(response.data.data){
                        Swal.fire(
                            'Good job!',
                            'Successfuly added a new Member!',
                            'success',
                            'OK'
                        )
                        seterrorCode(false)
                        seterrorName("")
                        setListofNew("")
    
    
                    }else {
                        Swal.fire(
                            'Error!',
                            'User must Exists!',
                            'error',
                            'OK'
                          )
                    } 
            }).catch(
                Swal.fire(
                    'Error!',
                    'An error has occurred!',
                    'error',
                    'OK'
                  )
            )

        })

    

       
    }



    const getChannelDetails = () => {
        if(channelDetail !== ""){
            console.log(channelDetail.id)

            return(
                <>
                <CardHead id={channelDetail.data.id}>{channelDetail.data.name}</CardHead>
                </>
            )
        }

    }

    return (
        <Modal
        isOpen={cardInfo.modal}
        ariaHideApp={false}
        style={customStyles}
        >
            <NewMemberConainter>
            <ModalWrapper>
                <ModalHeader>
                    <CloseViewer onClick={()=>setCardInfo({modal:false})}>Close</CloseViewer>
                </ModalHeader>
                <HeadWrapper>
                <ChannelCreate onClick={() => onSubmit()}>Add</ChannelCreate>
            </HeadWrapper>
                <CardWrapper>
                {
                    getChannelDetails()
                }                
            </CardWrapper>
            </ModalWrapper>

            <NewChannelMember>Add new Members</NewChannelMember>
                <NewChannleInfo>Use the search below 
                    and click the user email to automatically add in the list</NewChannleInfo>
                <ReactSearchAutocomplete
                items={listofUsers.data}
                onSearch={handleOnSearch}
                fuseOptions={{ keys: ["uid",] }}
                resultStringKeyName="uid"
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                autoFocus
                formatResult={formatResult}/>
            <NewChannleInfo>Members</NewChannleInfo>
            <NewChannelUl>
                        {
             
                listofNew &&  listofNew.map(memberInfo =>{
                        console.log(memberInfo)
        
                        return(<NewChannelLi key ={memberInfo.id} id={memberInfo.id}>
                                     <NewChannelSeparator>
                                         <NewChannelSeparator>
                                         {memberInfo.uid}
                                         </NewChannelSeparator>
                                         <RemoveButton id={memberInfo.id} onClick={e=> removeUser(e)}>
                                             Remove
                                         </RemoveButton>
                                     </NewChannelSeparator>
                                </NewChannelLi>
                            )
                     })
                
            }
            </NewChannelUl>
            </NewMemberConainter>

        </Modal>
    )
}

export default CardNewMember
