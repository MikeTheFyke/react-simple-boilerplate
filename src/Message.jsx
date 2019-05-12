import React, {Component} from 'react';

class Messages extends Component {
  render() {
    // console.log(this)
      if (this.props.type === "incomingMessage"){
        return (
        <div className="message">
          <span className="message-username">{this.props.user}</span>
          <span className="message-content">{this.props.content}</span>
        </div>
        );
      } else if (this.props.type === "incomingNotification"){
        return (
          <div className="message system">
            {this.props.content}
          </div>
        );
      }
  }
}

export default Messages;