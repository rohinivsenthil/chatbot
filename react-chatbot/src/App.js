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

    addResponseMessage("Fetched response from API");
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
