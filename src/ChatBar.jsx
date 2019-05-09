import React, {Component} from 'react';

class ChatBar extends Component {
    constructor(props){
      super();
      // this.handlePress = this.handlePress.bind(this)
      // this.handleKeyPress = this.handleKeyPress.bind(this)
    }
  render()
  {
  const handlePress = (event) => {
  let newValue = event.target.value;
    this.props.changeStateName(newValue);
  }
  const handleKeyPress = (event) =>{
    if(event.key === 'Enter'){
      let nMessage = event.target.value;
      this.props.addMessage(nMessage);
      event.target.value = "";
    }
}
    return (
      <footer className="chatbar">
      <input className="chatbar-username" placeholder="Your Name (Optional)" value={this.props.currentUser} onChange={handlePress}/>
      <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={handleKeyPress}/>
    </footer>
    );
    }
  }

export default ChatBar;