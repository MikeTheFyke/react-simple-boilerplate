import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';


class App extends Component {
  constructor(props){
    super(props);
    // this.changeStateName = this.changeStateName.bind(this)
    // this.addMessage = this.addMessage.bind(this)
    this.state = {
    currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
    messages: [
      {
        username: "Bob",
        content: "Has anyone seen my marbles?",
        id: 1
      },
      {
        username: "Anonymous",
        content: "No, I think you lost them. You lost your marbles Bob. You lost them for good.",
        id: 2
      }
    ]
  }
  }
  componentDidMount() {
  console.log("componentDidMount <App />");
  setTimeout(() => {
    console.log("Simulating incoming message");
    // Add a new message to the list of messages in the data store
    const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
    const messages = this.state.messages.concat(newMessage)
    // Update the state of the app component.
    // Calling setState will trigger a call to render() in App and all child components.
    this.setState({messages: messages})
  }, 3000);
  }

    addMessage = (message) => {
      const newMessage = {
      username: this.state.currentUser.name,
      content: message,
      id: this.state.messages.length + 1
    };
    const messageState = this.state.messages.push(newMessage);
    this.setState({messageState});
  }


  changeStateName(data){
    this.setState ({currentUser: {name: data}})
  }


  render() {
    return (
      <div>
        <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <ChatBar currentUser= {this.state.currentUser.name} addMessage={this.addMessage} />
        <MessageList messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;