//Aufgabe: Erstelle Component, die <p>Ich bin die TodoListe</p> ausgibt
// fügt sie TodoContainer hinzu und rendert sie dort
import React from "react";

class TodoList extends React.Component {

  render () {
    return (
      <p>Ich bin die Todoliste</p>
    )
  }
}

export default TodoList;