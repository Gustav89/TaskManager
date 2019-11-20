import React, { Component } from 'react';

class TodoForm extends Component {
constructor()
{
  super();
  this.state = {
    title:'',
    owner:'',
    description:'',
    priority_level:'low'
  }
  this.handleInputChange = this.handleInputChange.bind(this);
  this.handlerSubmit = this.handlerSubmit.bind(this);
}

handleInputChange(e)//verifica si hay cambios en los slots
{
  const {value , name} = e.target;
  this.setState({
    [name]:value
  });
}

handlerSubmit(e) //envia el todo nuevo a la "base de datos"
{
  e.preventDefault();
  this.props.onAddTodo(this.state);
}

  render(){
    return (
    <div className = "card">
      <form className = "card-body" onSubmit ={this.handlerSubmit}>
        <div className = "form-group">
          <input type = "text"
                 name = "title"
                 onChange = {this.handleInputChange}
                  value={this.state.title}
                 className = "form-control"
                 placeholder = "Title" />
        </div>
         <div className = "form-group">
            <input type = "text"
                   onChange = {this.handleInputChange}
                   value={this.state.owner}
                   name = "owner"
                   className = "form-control"
                   placeholder = "Owner" />
        </div>
        <div className = "form-group">
           <input type = "text"
                  onChange = {this.handleInputChange}
                  value={this.state.description}
                  name = "description"
                  className = "form-control"
                  placeholder = "Description" />
       </div>
       <div className = "form-group">
          <select
                 name = "priority_level"
                 className = "form-control"
                 value={this.state.priority_level}
                 onChange = {this.handleInputChange}
                 >

                 <option>low</option>
                 <option>medium</option>
                 <option>high</option>
          </select>
      </div>
      <button type="submit" className="btn btn-primary">
         Save
      </button>

      </form>
    </div>


    );
  }
}

export default TodoForm;
