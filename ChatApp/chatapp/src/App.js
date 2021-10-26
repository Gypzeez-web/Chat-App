
import React, { Component } from "react";
import Chatbot from "react-chatbot-kit";
import ActionProvider from "./component/ActionProvider";
import config from "./component/chatbotConfig";
import MessageParser from "./component/MessageParser";

class App extends Component {
  state = {
    showBot: false
  };

  handleShowBot = () => {
    this.setState({
      showBot: !this.state.showBot
    });
  };

  render() {
    return (
      <div className="container text-center">
        {this.state.showBot && (
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
            className="app_Chatbot"
          />
        )}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMSTcf9vxteFLXwKOVebZMuNkDh7PkAvwe7w&usqp=CAU"
          alt="Career Guidance Bot"
          className="rounded mx-auto d-block"
          onClick={this.handleShowBot}
        />
      </div>
    );
  }
}

export default App;

/*import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";

const socket = io.connect("http://localhost:8080");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;
*/