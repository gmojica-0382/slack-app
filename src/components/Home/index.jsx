import React, {useEffect, useState} from 'react'
import { BodyReWrapper, MainContainer, NavigationReWrapper, SidebarReWrapper } from './HomeElements'
import {HomeNav} from '../Navigator'
import SdiebarsSection from '../Sidebars'
import AllChannels from '../Channels'
import MyChannels from '../Channels/mychannels'
import UsersSection from '../Users'
import { bodyStateCons } from '../Config'
import NewChannelSec from '../NewChannel'
import ChatChannelSec from '../ChatChannel'
import ChatUserSec from '../ChatUser'


const HomeSection = () => {
    const [bodyView, setbodyView] = useState(bodyStateCons.myChannels)


    useEffect(() => {        
    }, [bodyView])

    const bodyStateViewer = () =>{
        if(bodyView === bodyStateCons.myChannels){
            return (
                <MyChannels setbodyView={setbodyView}/>
            )
        }
        if(bodyView === bodyStateCons.allChannels){
            return(
                <AllChannels setbodyView={setbodyView}/>
            )
        }

        if(bodyView === bodyStateCons.createChannels){
           return(<NewChannelSec setbodyView={setbodyView}/>)
        }

        if(bodyView === bodyStateCons.userList){
            return(
                <UsersSection setbodyView={setbodyView}/>
            )
        }
        if(bodyView === bodyStateCons.chatChannel){
            return (
                <ChatChannelSec setbodyView={setbodyView} />
            )
        }
        if(bodyView === bodyStateCons.chatUser){
            return(
                <ChatUserSec setbodyView={setbodyView}/>
            )
        }
    }


    return (
        <MainContainer>
            <NavigationReWrapper>
                <HomeNav/>
            </NavigationReWrapper>
            <SidebarReWrapper>
                <SdiebarsSection bodyState={setbodyView}/>
            </SidebarReWrapper>
            <BodyReWrapper>
                {
                    bodyStateViewer()
                }
            </BodyReWrapper>
        </MainContainer>
    )
}

export default HomeSection
