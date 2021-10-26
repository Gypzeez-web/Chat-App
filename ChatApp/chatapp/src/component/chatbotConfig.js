import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Branches from "./Branches";
import List from "./List";


const botName = "Gypzeez Guidance Bot";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(
      `Hi There! I am ${botName}. I am here to help you find about Gypzeez.`
    ),
    createChatBotMessage(
      "May I know in which section from the below you are enrolled in?",
      {
        withAvatar: true,
        widget: "Branches"
      }
    )
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#a1c3f0"
    },
    chatButton: {
      backgroundColor: "#ccdbfd"
    }
  },
  widgets: [
    {
      widgetName: "Branches",
      widgetFunc: (props) => <Branches {...props} />
    },
    {
      widgetName: "careerLinks",
      widgetFunc: (props) => <List {...props} />,
      props: {
        options: [
          {
            text: "Yes",
            id: 1
          },
          {
            text: "No",
            id: 2
          },
          {
            text: "May Be",
            id: 3
          }
        ]
      }
    }
  ]
};

export default config;
