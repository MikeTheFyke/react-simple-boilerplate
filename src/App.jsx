import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: []
    };
    this.socket = new WebSocket('ws://localhost:3001');
  }

  componentDidMount() {
    this.socket.onopen = () => {
      console.log('Browser client connected');
    };
    this.socket.onmessage = (event) => {
      let serverMessage = JSON.parse(event.data);
      let updateMessage = [...this.state.messages, serverMessage]
      this.setState({messages : updateMessage});
    }
    console.log("componentDidMount <App />");
  }

  changeStateName = (info) => {
   this.setState({ currentUser: { name: info } })
  }

  addMessage=(message)=>{
    const newMessage ={
      username: this.state.currentUser.name,
      content:message,

    }

    this.socket.send(JSON.stringify(newMessage))


    // this.setState({messageState});
  }

  render() {

    return (
      <div>
        <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        </nav>

        <MessageList messages ={this.state.messages}/>
        <ChatBar currentUser ={this.state.currentUser.name} addMessage={this.addMessage} changeStateName={this.changeStateName}/>

      </div>
    );

  }
}
export default App;