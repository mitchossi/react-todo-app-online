//Aufgabe: Erstelle Component, die <p>Ich bin die TodoListe</p> ausgibt
// fügt sie TodoContainer hinzu und rendert sie dort
import React from "react";

class TodoList extends React.Component {

  render() {

    // this.props.todos: Zugriff auf die
    // prop "todos"

    //unique key/einmaliger key: Hilft sozusagen react
    // effizienter zu arbeiten
    return (
      <ul>
        {this.props.todoProp.map(todo => {
          return <li key={todo.id}>{todo.title}</li>
        })}
      </ul>
    )
  }
}

export default TodoList;