import React from "react";
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
    return (
      <>
        <ul>
          { this.state.todos.map( todo => {
            return <li>{todo.title}</li>
          } ) }
        </ul>
        <TodoList />
      </>
    );
  }

}

export default TodoContainer; 