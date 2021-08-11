import React from "react";
import Header from "../Header/Header.js";
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

  render() {
    // todos={this.state.todos}: Übergibt das
    // todos Array an die TodoList Component
    return (
      <>
        <Header />
        <TodoList todoProp={this.state.todos}/>
        
      </>
    );
  }

}

export default TodoContainer; 