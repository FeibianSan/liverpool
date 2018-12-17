import React, { Component } from 'react';
import './App.css';

//data
import { todos } from './todos.json';

//formulario
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos
    }

    this.handleAddTodo = this.handleAddTodo.bind(this);
  }


handleAddTodo(todo)
{
  this.setState({
    todos: [...this.state.todos,todo]
  })
}

removeTodo(index)
{
  this.setState({
    todos: this.state.todos.filter((e,i) => {
      return i !== index
    })

  })
}
  
  render() {
    
    const todos = this.state.todos.map((todo,i) => {
      return(
          <div className="col-md-4" key={i}>
            <div className="card mt-4">
              <div className="card-header">
              <img src={todo.imagen}  alt="Imagen" className="imgCat" />
              <div></div>
                <span className="badge badge-pill badge-danger ml-2">
                  {todo.prioridad}
                </span>
              </div>
              <div className="card-body">
                <p>{todo.nombre}</p>
                <p><mark>{todo.precio}</mark></p>
              </div>
              <div className="card-footer">
                <button className="btn btn-danger" onClick={this.removeTodo.bind(this,i)}>Borrar</button>
              </div>  
            </div>
          </div>
        )
    })


    return (
      <div className="App">
        <nav className="navbar navbar-dark  bg-dark">
          <a href="" className="text-white">
          Productos 
          <span className="badge badge-pill  badge-light ml-2">{ this.state.todos.length }</span>
          </a>
        </nav>  
 
      <TodoForm onAddTodo={this.handleAddTodo}/>

        <div className="container">         
          <div className="row mt-4">
            {todos}
          </div>
        </div>


      </div>
    );
  }
}

export default App;
