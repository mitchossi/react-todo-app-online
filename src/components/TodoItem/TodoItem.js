const TodoItem = (props) => {

  return (
    <li>
      <input 
        type="checkbox" 
        checked ={props.completed}
        onChange={ ()=>{props.handleChangeProp()} }
      />
      {props.children}
      <button>Klick mich</button>
    </li>
  )
};

export default TodoItem;

// props.children:
// gibt aus, was zwischen dem
// öffnenden <TodoItem> und 
// schließenden </TodoItem> Tags steht