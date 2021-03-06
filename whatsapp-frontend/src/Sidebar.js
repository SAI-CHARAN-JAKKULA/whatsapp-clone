import React from 'react'
import "./Sidebar.css";
import ChatIcon from '@material-ui/icons/Chat';
import {Avatar,IconButton} from "@material-ui/core";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat';
import { SearchOutlined } from '@material-ui/icons';
function Sidebar() {
    return (
        <div className="sidebar">
            
            <div className="sidebar__header">
                <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu_OQSTeJR3V4pnAAUh3yZHwpOdGEqmSQKGlMhXz=s64-c-mo"/>
                <div className="sidebar__headerRight">
                   
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton><ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    
                    <SearchOutlined/>
                    <input placeholder="Search or start a new chat" type="text" ></input>
                </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar
