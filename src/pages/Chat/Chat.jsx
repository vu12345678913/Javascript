import React from 'react'
import './Chat.css'
import LeftSidebar from '../../compoments/LeftSidebar/LeftSidebar'
import RightSidebar from '../../compoments/RightSidebar/RightSidebar'
import ChatBox from '../../compoments/ChatBox/ChatBox'

const Chat = () => {
  return (
    <div className='chat'>
        <div className="chat-container">
        <LeftSidebar />
        <ChatBox />
        <RightSidebar />
        </div>
    </div>
  )
}

export default Chat