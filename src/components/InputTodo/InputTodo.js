import React, { Component } from "react";

class InputTodo extends Component {

  constructor() {
    super();

    this.state = {
      title:""
    }
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Add Todo..." />
        <button>Submit</button>
      </form>
    )
  }
}
export default InputTodo;

// Exkurs: ES7 Syntax (wie im Tutorial)

class InputTodoEs7 extends Component { 

  state = {
    title:""
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Add Todo..." />
        <button>Submit</button>
        Zugriff erfolgt auch mit this: {this.state.title}
      </form>
    )
  }
}
