import React, { Component } from 'react';

class Card extends Component {
  render(){
    return (
      <div className = "col-md-4" >
        <div className ="card mt-4">
          <div className = "card-header" >
              <h5 className="card-title">{ this.props.todo.title }</h5>
              <span className = "badge badge-pill badge-danger">{ this.props.todo.priority_level }</span>
          </div>
          <div className="card-body">
              <p className="card-text"><mark>{this.props.todo.owner}</mark></p>
              <p className="card-text">{this.props.todo.description}</p>

          </div>
              <div className = "card-footer"><a href="#" className="btn btn-danger" onClick = {this.props.remTodo}> Delete </a></div>
          </div>
      </div>
    );
  }
}

export default Card;
