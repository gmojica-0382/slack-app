import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import React from 'react'
import { SpecialContainer } from './SidebarsElements';
import {Link} from "react-router-dom";
import { bodyStateCons } from '../Config';
const SidebarsSection = ({bodyState}) => {

    const userName = JSON.parse(localStorage.getItem("userinfo"))

    return (
        <>
        <ProSidebar collapsed={false}>
            <SidebarHeader>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="square">
                   {userName && <MenuItem>
                        {userName.uid}
                        <Link to="/home"/>
                    </MenuItem> }
                    <SubMenu title="Channels">
                        <MenuItem  onClick={()=>bodyState(bodyStateCons.createChannels)}>
                            Create New
                        </MenuItem>
                        <MenuItem onClick={()=>{bodyState(bodyStateCons.myChannels)}}>
                            My Channels
                        </MenuItem>
                        <MenuItem onClick={()=> bodyState(bodyStateCons.allChannels)}>
                            All Channels
                        </MenuItem>
                    </SubMenu>
                    <SubMenu title="Users">
                        <MenuItem onClick={()=>bodyState(bodyStateCons.userList)}>
                            All Users
                        </MenuItem>
                   </SubMenu>
                </Menu>
            </SidebarContent>
           <SidebarFooter>
                <SpecialContainer>
                    G & G
                </SpecialContainer>
           </SidebarFooter>
        </ProSidebar>
        </>
    )
}

export default SidebarsSection
