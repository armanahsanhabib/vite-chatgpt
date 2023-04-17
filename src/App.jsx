import { useState } from 'react';
import './assets/css/App.css';
import Homepage from './components/Homepage';
import MyChat from './components/MyChat';
import Navbar from './components/Navbar';
import PreviousChat from './components/PreviousChat';
import ResponsiveNav from './components/ResponsiveNav';
import dummyResponses from './database/dummyResponses';

const App = () => {
  const [pageContent, setPageContent] = useState('Homepage');
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const [chatList, setChatList] = useState([]);

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const botResponse = dummyResponses[Math.floor(Math.random() * dummyResponses.length)];
    const msg = document.getElementById('msg');
    setAnswer(botResponse);
    setChatList([...chatList, { question, answer: botResponse }]);
    msg.value = "";
  };

  const handleNavClick = (content) => {
    setPageContent(content);
    console.log(`switched to ${content}`);
  };

  return (
    <div className="App flex h-screen">
      <ResponsiveNav />
      <Navbar handleNavClick={handleNavClick} />
      {
        pageContent === 'Homepage' ? <Homepage handleSubmit={handleSubmit} /> :
          pageContent === 'My chat' ? <MyChat handleSubmit={handleSubmit} handleChange={handleChange} chatList={chatList} /> :
            pageContent === 'Previous chat' ? <PreviousChat handleSubmit={handleSubmit} /> : null
      }
    </div>
  );
}

export default App;