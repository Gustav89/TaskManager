import React, { Component } from 'react';

class Navigation extends Component {
  render(){
    return (
      <nav className ="navbar navbar-dark bg-dark">
          <div>
            <a href= "" className="text-white">{ this.props.title }</a>
            <spam className = "badge badge-pill badge-danger ml-2" >{this.props.len }</spam>
          </div>
      </nav>
    );
  }
}

export default Navigation;
