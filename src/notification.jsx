import React, {Component} from 'react';

class  Notification extends Component {
  render(){
    if (this.props.olderUser === ""){
      return null;
    } else {
    return()
      <div className="notification">
      <span className="notification-content">{this.props.olderUser} changed their name to {this.props.currentUser}.</span>
      </div>
    }
  }
}



export default Notification;