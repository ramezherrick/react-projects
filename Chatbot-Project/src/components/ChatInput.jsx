import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css'

export const ChatInput = ({chatMessages, setChatMessages}) => {
    const[inputText, setInputText] = useState('');
    
    const saveInputText = (e) => {
        setInputText(e.target.value);
    }
    
    const sendMessagesHandler = () => {
        const newChatMessages = [
            ...chatMessages,
            {message: inputText, sender: "user"}
        ];
        
        setChatMessages(newChatMessages);
        
        const response = Chatbot.getResponse(inputText);
        
        setChatMessages([
            ...newChatMessages,
            {message: response, sender:'robot'}
          ]);
          
        setInputText('');
    }
    
    return (
    <div className="chat-input-container">
        <input
            className="chat-input"
            placeholder="Send a message to chatbot" 
            size="30"
            onChange = {saveInputText}
            value = {inputText}/>
        <button 
            className="send-button" 
            onClick={sendMessagesHandler}>
            Send
        </button>
    </div>
    );
}