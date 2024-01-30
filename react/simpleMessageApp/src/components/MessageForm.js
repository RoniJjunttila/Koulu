import React, { useState, useEffect} from 'react';
import './MessageForm.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot  } from "@fortawesome/free-solid-svg-icons";


const MessageForm = ({ onSendMessage, id, onScreenshotButtonClick}) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {

    if (message.trim() !== '' || screenshot) {
      const messageObject = {
        id: id,
        message: message,
        userName: '', 
        timestamp: new Date(),
      };
      console.log(messageObject)
      onSendMessage(messageObject);
      setMessage('');
    
    }
  };

  const handleSendButton = () => {
    onScreenshotButtonClick();
  }

  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      if (message) {
        handleSendMessage();
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEnterKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEnterKeyPress);
    };
  });


  return (
    <div className="input-container">
      <button onClick={handleSendButton}>
        <FontAwesomeIcon icon={faCircleDot} />
      </button>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="rounded-input"
      />
      <button className="send-button" onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default MessageForm;
