import { useState, useEffect } from 'react'
import robotImage from '../assets/robot.png'
import userImage from '../assets/user.png'
import './ChatMessage.css'

export const ChatMessage = ({message, sender}) =>{
    const [isLoading, setIsLoading] = useState(sender === 'robot');

    useEffect(()=>{
      if(sender === 'robot'){
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
      }
    }, [sender]);

    return (
      <div className={
        sender === 'user' ?
          'chat-message-user' :
          'chat-message-robot' 
        }>
          {sender === 'robot' && (
            <img src={robotImage} className="chat-message-profile"/>
          )}
          <div className="chat-message-text">
            {isLoading ? <div className = "spinner"></div> : message}
          </div>
          {sender === 'user' && (
            <img src={userImage} className="chat-message-profile"/>
          )}
      </div>
    );
}
      