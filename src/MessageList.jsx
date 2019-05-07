import React, {Component} from 'react';
import Messages from './Message.jsx';

class MessageList extends Component {
  render() {
    let messagesContent = this.props.messages.map((message) =>
        <Messages key={message.id} content = {message.content} user = {message.username}/>
      );
    return (
     <main className="messages">
      {messagesContent}
    </main>
    );
  }
}

export default MessageList;