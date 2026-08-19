import { useEffect, useRef } from 'react'
import { ChatMessage } from './ChatMessage'
import './ChatMessages.css'

export const ChatMessages = ({chatMessages}) => {
    const chatMessagesContainerRef = useRef(null);

    useEffect(()=>{
      const containerElem = chatMessagesContainerRef.current;
      if(containerElem) {
       containerElem.scrollTop = containerElem.scrollHeight;
      } 
    }, [chatMessages]);

    return (
      <div 
        className="chat-messages-container" 
        ref={chatMessagesContainerRef}>
          {chatMessages.map((x, i) => 
            <ChatMessage 
              key={i} 
              message = {x.message} 
              sender = {x.sender}/>
          )}
      </div>);
}
      