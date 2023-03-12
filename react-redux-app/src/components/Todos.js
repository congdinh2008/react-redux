import { connect } from "react-redux";
import { useRef } from "react";
import ListItem from "./ListItem";
import {
  handleCreateTodo,
  handleToggleTodo,
  handleDeleteTodo,
} from "../actions/todos";

const Todos = (props) => {
  const inputRef = useRef();

  const addTodo = () => {
    props.dispatch(
      handleCreateTodo(
        inputRef.current.value,
        () => (inputRef.current.value = "")
      )
    );
  };

  const removeItem = (todo) => {
    props.dispatch(handleDeleteTodo(todo));
  };

  const toggleItem = (todo) => {
    props.dispatch(handleToggleTodo(todo));
  };

  return (
    <div>
      <h2>Todo</h2>
      <input type="text" placeholder="Add Todo" ref={inputRef}></input>
      <button onClick={addTodo}>Add</button>
      <ListItem
        toggleItem={toggleItem}
        removeItem={removeItem}
        items={props.todos}
      />
    </div>
  );
};

export default connect((state) => ({
  todos: state.todos,
}))(Todos);
