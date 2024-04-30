import React, { useState } from 'react'
import { ChatEngine, getOrCreateChat } from 'react-chat-engine'
import ChatFeed from '../chatLayout/ChatFeed'
import './chatPage.css'

const ChatPage = () => {

  return (

    <div className='background'>
        <ChatEngine
            projectID = '2fdb187d-a097-4355-9340-cc4b6e5c29c6'  
            userName='alejo.kofoworola11@gmail.com' 
            userSecret ='Alejokofs123' 
            height='100vh'
            renderChatFeed={(ChatAppProps) => <ChatFeed {...ChatAppProps}/>}
	       
        />
      
    </div>
  )
}

export default ChatPage
