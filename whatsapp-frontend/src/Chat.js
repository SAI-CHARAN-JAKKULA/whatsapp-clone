
import React from 'react'
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {  SearchOutlined } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
                <div className="chat_headerInfo">
                    <span className="span1">Dotsai</span>
                    <span className="span2">last seen at...</span>
                </div>
                <div className="chat_headerRight">

                    <IconButton><SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

            </div>
            <div className="chat_body">
                <p className="chat_message">
                    <span className="chat_name">
                        dotsai
                        </span>
                    THIS IS A MESSAGE
                        <span className="chat_timestamp">
                        {new Date().toString()}
                    </span>
                </p>
                <p className="chat_receiver chat_message">
                    <span className="chat_name">
                        dotsai
                        </span>
                    THIS IS A MESSAGE
                        <span className="chat_timestamp">
                        {new Date().toString()}
                    </span>
                </p>
            </div>
            <div className="chat_footer">
                <InsertEmoticonIcon/>
                <form>
                 <input placeholder="Type a message" type="text"/>
                 <button type="submit">Send a message</button>
                </form>
                <MicIcon/>
            </div>
        </div>


    )
}

export default Chat
