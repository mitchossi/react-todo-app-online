import React from "react";
import Header from "../Header/Header.js";
import Practice from "../Practice/Practice.js";
import TodoCount from "../TodoCount/TodoCount.js";
import TodoList from "../TodoList/TodoList.js";
import InputTodo from "../InputTodo/InputTodo.js";
import { v4 as uuidv4 } from "uuid";
import "./TodoContainer.css";
import AlertButton from "../Practice/AlertButton.js";


class TodoContainer extends React.Component {

  constructor() {
    super();

    this.state = {
      todos: [
        {
          id: uuidv4(),
          title: "React lernen",
          completed: true
        },
        {
          id: uuidv4(),
          title: "JavaScript wiederholen",
          completed: false
        },
        {
          id: uuidv4(),
          title: "Bewerbung abschicken",
          completed: false
        }
      ]
     };
  }



  handleChange = (id) => {
    console.log('checkbox clicked:', id);

    //Wichtig: State niemals direkt ändern:
    //this.state.todos = []; // SO NICHT

    //Funktion zum Ändern des states
    //erwartet ein Object als Parameter

    //Schreibweise ohne Ternären Operator
    this.setState({
      todos: this.state.todos.map( todoObj =>{
        if(todoObj.id === id) {
          return {
            ...todoObj,
            completed: !todoObj.completed
          }
        }
        return todoObj;
        
      }) // END of map
    });

    // Schreibweise mit Ternären Operator
  
    // this.setState({
    //   todos: this.state.todos.map( todoObj =>{
    //     return {
    //       ...todoObj,

    //       // invertiere completed (false wird true und true wird false)
    //       // wenn die ID des todoObj der id entspricht, die dem Handler (handleChange)
    //       // übergeben wurde
    //       completed: todoObj.id === id ? !todoObj.completed : todoObj.completed
    //     }
    //   })
    // });


    //❗Todo❗ in Zukunft: setState updater bzw callback benutzen
    // Warum? Siehe unten bei Erklärungen
  }

  addTodo = (title) => {
    console.log(title);

    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    this.setState({
      todos: [newTodo, ...this.state.todos]
    });

    // [...this.state.todos, newTodo]
    // kopiert sozusagen unser todosArray und fügt
    // unserer newTodo als erstes Element hinzu
  }

  delTodo = (id) => {

    // hier speichern wir das state-obj
    // in einer Variable

    const newTodos = this.state.todos.filter( todo => {
      return todo.id !== id;
    });

    this.setState( {todos: newTodos} );

    // Todo Zukunft: Hier eigentlich wieder besser: callback 
    // function als Parameter für setState
  }


  render() {
    // todosProp={this.state.todos}: Übergibt das
    // todos-Array an die TodoList Component

    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo 
            addTodoProp={this.addTodo}
          />
          <TodoList 
            todosProp={this.state.todos}
            handleChangeProp={this.handleChange}
            delTodoProp={this.delTodo}
          />
          <TodoCount todosProp={this.state.todos} />
          {/* <Practice /> */}
          
        </div>
      </div> 
    );
  }

}

export default TodoContainer; 

// *** Erklärungen ***

// Ternärer Operator: ? :
// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Conditional_Operator


// let completed = todoObj.id === id ? !todoObj.completed : todoObj.completed

// Obere Zeile ist gleichbedeutend mit folgendem Code

// let completed = null;
// if( todoObj.id === id ) {
//   completed =!todoObj.completed
// } else {
//   completed = todoObj.completed;
// }
