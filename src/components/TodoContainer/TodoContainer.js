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
      ],
      someText: "Hallo Reacter!",
      names: ["Manuel", "Christian", "Alina"]
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

  handleBtnClick = () => {
    alert('Click!')
  }

  handleWordChange = () => {
    this.setState({
      someText: "Hallo Welt!"
    });
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
        <div className="nur-zum-lernen">
          <h3>Nur zum üben</h3>
          <p>{this.state.someText}</p>
          <button
            onClick={this.handleWordChange}
          >
            Ändere oberen Text
          </button>
        </div>
      </>
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
