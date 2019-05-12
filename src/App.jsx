import React, { Component } from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Anon"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [],
      usersLoggedIn: 0

    };
    this.socket = new WebSocket('ws://localhost:3001');
  }

  componentDidMount() {
    this.socket.onopen = () => {
      console.log('Browser client connected');
    };

    this.socket.onmessage = (event) => {
      let serverMessage = JSON.parse(event.data);
        console.log("The server message is ", serverMessage);

      if (Object.keys(serverMessage).includes("loggedIn")){
        this.setState({usersLoggedIn : serverMessage.loggedIn});

      } else if (typeof serverMessage !== "object"){
        let numberOfUsers = Number(event.data);
        this.setState({usersLoggedIn: numberOfUsers});

      } else {
        let updateMessage = [...this.state.messages, serverMessage]
        this.setState({messages: updateMessage});
      }

    }
    console.log("componentDidMount <App />");

  }

    addMessage = (message) => {
    console.log("This in Constructor: ", this)
    let newMessage = {
      type: "postMessage",
      username: this.state.currentUser.name,
      content:message
    }
    console.log("My message is ",newMessage);
    this.socket.send(JSON.stringify(newMessage))
  }

  changeStateName = (info) => {
    console.log("CSN: ", this)
    let notification = {
        type : "postNotification",
        content : `${this.state.currentUser.name} has changed their name to ${info}.`
    }
    this.setState({ currentUser: { name: info } })
    this.socket.send(JSON.stringify(notification))
  }

  render() {

    return (
      <div>
        <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        <span className="usersLogin">User Count: {this.state.usersLoggedIn}</span>
        </nav>

        <MessageList messages ={this.state.messages}/>
        <ChatBar currentUser ={this.state.currentUser.name} addMessage={this.addMessage} changeStateName={this.changeStateName}/>
      </div>
    );
  }
}

export default App;