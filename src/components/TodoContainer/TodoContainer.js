import React from "react";
import Header from "../Header/Header.js";
import TodoCount from "../TodoCount/TodoCount.js";
import TodoList from "../TodoList/TodoList.js";

class TodoContainer extends React.Component {

  constructor() {
    super();

    this.state = {
      todos: [
        {
          id: 1,
          title: "React lernen",
          completed: true
        },
        {
          id: 2,
          title: "JavaScript wiederholen",
          completed: false
        },
        {
          id: 3,
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
    // erwartet ein Object als Parameter
    this.setState({
      todos: this.state.todos.map( todoObj =>{
        return {
          ...todoObj,
          completed: todoObj.id === id ? !todoObj.completed : todoObj.completed
        }
      })
    });
  }

  handleBtnClick = () => {
    alert('Click!')
  }


  render() {
    // todosProp={this.state.todos}: Übergibt das
    // todos-Array an die TodoList Component

    return (
      <>
        <Header />
        <TodoList 
          todosProp={this.state.todos}
          handleChangeProp={this.handleChange}
          handleBtnClickProp={this.handleBtnClick}
        />
        <TodoCount todosProp={this.state.todos} />
      </>
    );
  }

}

export default TodoContainer; 



// Ekläärung Ternärer Operator
// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

// Kurzschreibweise 
// let completed = todoObj.id === id ? !todoObj.completed : todoObj.completed

//..für;

// let completed = null;
// if( todoObj.id === id ) {
//   completed =!todoObj.completed
// } else {
//   completed = todoObj.completed;
// }
