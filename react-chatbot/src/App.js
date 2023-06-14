import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import axios from 'axios';

import 'react-chat-widget/lib/styles.css';
// import './App.css';

import logo from './logo.svg';

function App() {
  useEffect(() => {
    addResponseMessage('Hello! How can I help you?');
  }, []);


  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://0971-104-199-237-112.ngrok-free.app/submit-prompt',
      headers: { 
        'Content-Type': 'application/json',
      },
      data : newMessage
    };

    async function makeRequest() {
      try {
        const response = await axios.request(config);
        console.log(JSON.stringify(response.data));
        addResponseMessage(JSON.stringify(response.data.response.answer));
      }
      catch (error) {
        console.log(error);
      }
    }
    
    makeRequest();
  };

    return (
      <div className="App">
        <Widget
          handleNewUserMessage={handleNewUserMessage}
          profileAvatar={logo}
          title="Course Advisor Chatbot"
          subtitle=""
        />
      </div>
    );
}

export default App;
