import React, { useState, useEffect } from 'react'

import {Avatar, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import './Chat.css';

function Chat() {

    const [input, setInput] = useState('');
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    },[]);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('You typed >> ', input);

        setInput('');
    }



    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last Seen at ...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message ${true && 'chat__receiver'}`}>
                <span className="chat__name">Marco Acosta</span>
                Hey Guys    
                <span className="chat__timestamp">3:52pm</span> 
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Type a Message"/>
                    <button type="submit" onClick={sendMessage}>Send a Message</button>
                </form>
                <MicIcon />
            </div>    
        </div>
    )
}

export default Chat
