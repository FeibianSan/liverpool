import React, { Component } from 'react';

import './TodoForm.css';
import logo from '../logo.jpg';


class TodoForm extends Component{
  constructor()
  {
    super();
    this.state = {
      "imagen" : "",
      "nombre" : "",
      "precio" : "",
      "prioridad" : ""
    };
   this.handleInput = this.handleInput.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleInput(e)
  {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
   
  }

handleSubmit(e)
{
  e.preventDefault();
  this.props.onAddTodo(this.state);  
}

  render(){
    return (
      <div className="TodoForm">            
          <div className="container">
            <div className="row  mt-4">
              <div className="col-4 text-center"> 
                <div className="card">      
                  <div className="card-header">  
                    <img src={logo} className="App-logo" alt="logo" />
                    <h5>Formulario de Registro</h5>                    
                  </div>         
                  <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group">              
                          <input type="text" className="form-control" name="imagen" placeholder="Imagen (url completa)" onChange={this.handleInput}/>              
                      </div>
                      <div className="form-group">              
                          <input type="text" className="form-control" name="nombre" placeholder="Nombre" onChange={this.handleInput}/>
                      </div>
                      <div className="form-group">              
                          <input type="text" className="form-control" name="precio" placeholder="Precio" onChange={this.handleInput}/>
                      </div>
                      <div className="form-group" onChange={this.handleInput}>             
                          <select className="form-control" name="prioridad">
                            <option>Caballeros</option>
                            <option>Damas</option>
                            <option>Niños</option>
                            <option>Deportes</option>
                          </select>
                      </div>
                      <div className="form-group">              
                        <button className="btn btn-primary">Guardar</button>
                      </div>                      
                    </form>                                    
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
     )
  }
}

export default TodoForm;