const TodoItem = (props) => {

  return (
    <li>
      <input 
        type="checkbox" 
        checked ={props.completed}
        onChange={ ()=>{props.handleChangeProp(props.id)} }
      />
      {props.children}
      
      <button
        onClick={ () => {props.delTodoProp(props.id)} }
      >
        Delete
      </button>
    </li>
  )
};

export default TodoItem;

// props.children:
// gibt aus, was zwischen dem
// öffnenden <TodoItem> und 
// schließenden </TodoItem> Tags steht