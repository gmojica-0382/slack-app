import axios from 'axios'
import React, {useEffect,useState} from 'react'
import { ChannelCreate, FormWrapper, HeadWrapper, NewChannelContainer, NewChannelError, NewChannelForm, NewChannelInput, NewChannelLabel, NewChannelLi, NewChannelMember, NewChannelSeparator, NewChannelSTitle, NewChannelTitle, NewChannelUl, NewChannleInfo, RemoveButton } from './NewChannelElements'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import Swal from 'sweetalert2'


const NewChannelSec = () => {

    const [newChannel, setNewChannel] = useState("")
    const [listofUsers, setlistofUsers] = useState("")
    const [listofNew, setListofNew] = useState([])
    const [errorCode, seterrorCode] = useState(false)
    const [errorName, seterrorName] = useState("")


    const customHeaders =  JSON.parse(localStorage.getItem("headers"))

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
        }).catch(error => console.log(error))

        return () => {
            setListofNew("")
        }
    
    }, [])

    const handleChannelName = e =>{
        setNewChannel(e.target.value)

    }

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
        console.log("Submiited")
        console.log(listofNew.length)

        seterrorCode(false)
        seterrorName("")

        if(newChannel === ""){
            seterrorCode(true)
            seterrorName("Channel Name is required!")
            return
        }
        if(listofNew.length === undefined || listofNew.length === 0){
            seterrorCode(true)
            seterrorName("Channel Members is required!")
            console.log(listofUsers.length )
            return
        }

       const data = {
            "name": newChannel,
            "user_ids": listofNew.map( el =>{ return el.id})
        }  

        const options = {
            method: 'POST',
            url: `${process.env.REACT_APP_SLACK_APP_BASE_URL}/channels/`,
            headers: {'Content-Type': 'application/json', ...customHeaders},
            data: JSON.stringify(data)
        }

        axios.request(options)
        .then(response => {
                if(response.data.data){
                    Swal.fire(
                        'Good job!',
                        'Successfuly created a new Channel!',
                        'success',
                        'OK'
                    )
                    seterrorCode(false)
                    seterrorName("")
                    setNewChannel("")
                    setListofNew("")


                }else {
                    Swal.fire(
                        'Error!',
                        'Name has already been taken!',
                        'error',
                        'OK'
                      )
                } 
        }).catch()
    }

    return (
        <NewChannelContainer>

            <NewChannelSTitle>Transform the way you work with one place for everyone and everything you need to get stuff done.</NewChannelSTitle>
            <NewChannelTitle>Create your New Channel!</NewChannelTitle>
            <HeadWrapper>
                <ChannelCreate onClick={() => onSubmit()}>Create</ChannelCreate>
            </HeadWrapper>
            <FormWrapper>
            <NewChannelForm>
                <NewChannelLabel>
                    <NewChannelInput
                        text 
                        type="text"
                        name="text"
                        value={newChannel} 
                        onChange={handleChannelName}
                        required
                        placeholder ="Channel Name"
                     ></NewChannelInput>
                </NewChannelLabel>
                { errorCode && <NewChannelError>{errorName}</NewChannelError>}
                <NewChannelMember>Add new Members</NewChannelMember>
                <NewChannleInfo>Use the search below and click the user email to automatically add in the list</NewChannleInfo>
                <ReactSearchAutocomplete
                items={listofUsers.data}
                onSearch={handleOnSearch}
                fuseOptions={{ keys: ["uid",] }}
                resultStringKeyName="uid"
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                autoFocus
                formatResult={formatResult}
          />
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
            </NewChannelForm>

            </FormWrapper>
        </NewChannelContainer>
    )
}

export default NewChannelSec
