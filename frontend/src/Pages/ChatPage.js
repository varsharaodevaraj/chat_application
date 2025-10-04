import React, { useEffect, useState } from 'react'
import axios from "axios"

function ChatPage() {

    const [chats,setChats] = useState([]);

    const fetchChats = async () => {
        try {
            const {data} = await axios.get("/api/chat");
            setChats(data);
        } catch (error) {
            console.error("Error fetching chats:", error);
        }
    };

    useEffect(()=>{
        fetchChats();
    },[]);
  return (
    <div>
        {
            chats.map((chat)=>(
                <div key={chat._id}>{chat.chatName}</div>
            ))
        }
    </div>
  )
}

export default ChatPage;