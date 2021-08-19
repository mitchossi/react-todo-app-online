import styles from "./TodoItem.module.css";

const TodoItem = (props) => {

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  // Alternative zum ternären Operator hinsichtlich completedStyle
  // siehe unten

  return (
    <li className={styles.item}>
      <input
        className={styles.checkbox}
        type="checkbox" 
        checked ={props.completed}
        onChange={ ()=>{props.handleChangeProp(props.id)} }
      />
      <span style={props.completed ? completedStyle : null}>{props.children}</span>
      
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



  // Alternative zum ternären Operator hinsichtlich completedStyle

  // let todoTextStyle = null;
  // if(props.completed) {
  //   todoTextStyle = completedStyle;
  // }
  // Entsprechend in span style "todoTextStyle" benutzen