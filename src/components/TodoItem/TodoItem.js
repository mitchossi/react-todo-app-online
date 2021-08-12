const TodoItem = (props) => {

  return (
    <li>
      <input type="checkbox" />
      {props.children}
    </li>
  )
};

export default TodoItem;

// props.children:
// gibt aus, was zwischen dem
// öffnenden <TodoItem> und 
// schließenden </TodoItem> Tags steht