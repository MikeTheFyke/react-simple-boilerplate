import React, {Component} from 'react';
import Messages from './Message.jsx';

class MessageList extends Component {
  render(){
    // console.log("This is this ", this.props.messages)
      let messagesContent = this.props.messages.map((message) =>
        <Messages type={message.type} key={message.id} content={message.content} user = {message.username}/>
      )
    return (
      <main className="messages">
        <ul>{messagesContent}</ul>
      </main>
    );
  }
}

export default MessageList;