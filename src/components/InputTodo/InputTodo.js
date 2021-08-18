import React, { Component } from "react";

class InputTodo extends Component {

  constructor() {
    super();

    this.state = {
      title:""
    }
  }
  onChangeHandler = (e) => {
    // [e.target.name] : dynamische Vergabe der Eigenschaft
    // eines Objects
    this.setState({
      [e.target.name]: e.target.value
    });    
  }

  handleSubmit = (e) => {
    e.preventDefault(); // vermeide Abschicken des Formulars
    // console.log(this.state.title);

    if(this.state.title.trim() !== "") { //Title ist nicht leer
      this.props.addTodoProp(this.state.title.trim());

      // Input Feld leeren
      this.setState({
        title: ""
      });

    } else {
      alert('Bitte Item reinschreiben!')
    }
  
    // trim entfernt Whitespace (z.B. Leerzeichen) am Anfang
    // und am Ende eines Strings und gibt diesen zurück
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          name="title"
          placeholder="Add Todo..." 
          value={ this.state.title }
          onChange={ this.onChangeHandler}
        />
        <button>Add +</button>
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
