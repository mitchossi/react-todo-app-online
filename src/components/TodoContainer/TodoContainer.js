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
      todos: []
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

  componentDidMount() {
    // wird aufgerufen, wenn die Component "gemountet", 
    // also zum DOM hinzugefügt wurde
    console.log("%c ComponentDidMount in TodoContainer", "background: #bada55")

    // Wozu: NEtzwerkanfragen/Daten laden: z.B mit fetch

    //AB hier: Todo von jsonplasholder fetchen
    // fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    //   .then( response => {return response.json()} )
    //   .then( data => {
    //     console.log(data);
    //     //Todos aus jsonplaceholder unseres Todos hinzufügen
    //     this.setState( {todos: [...data]} );
    //   })

    // Daten aus localStorage laden
    const temp = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(temp);

    if(loadedTodos) { // loadedTodos ist nicht leer
      this.setState({
        todos: loadedTodos
      })
    }
    

  }

  componentDidUpdate(previousProps, previousState) {
    // previousProps enthält die vorherigen Props (vor dem Update. Hier: leer)
    // previousState enthält den vorherigen State (vor dem Update)
    // componentDidUpdate wird ausgeführt, wenn die Komponente und 
    // somit das DOM geändert wurde

    // array können nicht direkt miteinander verglichen werden
    // => IMMER TRUE: if(previousState.todos !== this.state.todos) {
    //Stattdessen: Arrays ins String umwandeln 
    if( JSON.stringify(previousState.todos) !== JSON.stringify(this.state.todos) ) {
      // Hier ist es sinnvoll, die neuen Daten/State in einer Datenbank zu speichern
      localStorage.setItem("todos", JSON.stringify(this.state.todos) )
    }
    
    // Mehr zu componentDidUpdate unten
    console.log("%c componentDidUpdate in TodoContainer", "background: #bada55")
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


// *** ComponentDidUpdate ***
// Am besten vergleicht man den vorherigen State mit dem neuen State,
// damit man potenzielle Endless-Loops vermeidet. Vor allem wird das wichtig
// wenn man setState in ComponentDidUpdate verwendet