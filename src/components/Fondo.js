import React, {Component} from 'react';

import logo from '../logo.svg';
import Navigation from './Navigation';
import Card from './Card';
import TodoForm from './TodoForm';
import { todos } from '../server/todos.json';

class Fondo extends Component {
  constructor() {
    super();
    this.state = {
      title : "Mis Tareas",
      todos : todos
      }
  this.handlerAddTodo = this.handlerAddTodo.bind(this);
  }

handlerAddTodo(todo) //agrega un todo a la "base de datos"
{
  this.setState({
    todos : [...this.state.todos, todo]
  });
}

handlerRemoveTodo(index)
{
  console.log(index);
  if(window.confirm("Are you sure you want delete it?"))
  {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index;
      })
    });
  }
}



  render()
  {
  const todos =  this.state.todos.map((todo, i )=>{
      return(
        <Card todo= {todo} remTodo={this.handlerRemoveTodo.bind(this,i)} />
      );
    })



    return (
      <div className="App">
          <Navigation title= {this.state.title} len = {this.state.todos.length}  />
          <div className = "container">
            <div className = "row mt-4">
              <div className="col-md-4 text-center">
                <img src={logo} className="App-logo" alt="logo" />
                <TodoForm onAddTodo={this.handlerAddTodo}></TodoForm>
                </div>

                <div className="col-md-8">
                  <div className="row">
                    {todos}
                  </div>
               </div>

            </div>
          </div>
      </div>
    );

  }
}

export default Fondo;
