class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    // new method
    greet() {
      const greetingMessage = this.createChatBotMessage(
        `Hi Friend! ${`\n`}
         How may I help you?`
      );
      this.updateChatbotState(greetingMessage);
    }
  
    handleCareerList = () => {
      const message = this.createChatBotMessage(
        "Fantastic, do you enjoy being Web Development Path?",
        {
          widget: "Links"
        }
      );
      this.updateChatbotState(message);
    };
  
    handleDefault = () => {
      const message = this.createChatBotMessage(
        "Oops! I think you have not selected any option. Please select any option from below to proceed.",
        {
          widget: "Options"
        }
      );
      this.updateChatbotState(message);
    };
  
    updateChatbotState(message) {  
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message]
      }));
    }
  }
  
  export default ActionProvider;
  