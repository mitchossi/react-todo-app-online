//Aufgabe: Erstelle Component, die <p>Ich bin die TodoListe</p> ausgibt
// fügt sie TodoContainer hinzu und rendert sie dort
import React from "react";
import TodoItem from "../TodoItem/TodoItem.js";

// Prop in functional component
// const TodoList = (props) => {

//   console.log(props)
// }; 

class TodoList extends React.Component {

  render() {
    console.log(this.props);

    // this.props.todos: Zugriff auf die
    // prop "todos"

    //unique key/einmaliger key: Hilft sozusagen react
    // effizienter zu arbeiten
    return (
      <ul>
        {this.props.todosProp.map(todo => {
          //console.log('todo.title in this.props.todosProp.map:', todo.title);
          return <TodoItem key={todo.id}>{todo.title}</TodoItem>
        })}
      </ul>
    )
  }
}

export default TodoList;