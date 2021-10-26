import React, { Component } from "react";
import { Link } from "react-router-dom";
import Chatbot from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import config from "./chatbotConfig";
import MessageParser from "./MessageParser";

class Main extends Component {
  state = {
    showBot: false,
  };

  handleShowBot = () => {
    this.setState({
      showBot: !this.state.showBot,
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
          alt="Gypzeez Guidance Bot"
          className="rounded mx-auto d-block"
          onClick={this.handleShowBot}
        />
        <div>
          <Link className="nav-link" to="/add-product">
            Add Product
          </Link>
        </div>
      </div>
    );
  }
}

export default Main;
