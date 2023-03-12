import API from "goals-todos-api";

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo: todo,
  };
};

const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id: id,
  };
};

const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id: id,
  };
};

export function handleCreateTodo(name, callback) {
  return (dispatch) => {
    return API.saveTodo(name)
      .then((todo) => {
        dispatch(addTodo(todo));
        callback();
      })
      .catch(() => {
        return alert("Create todo error! Try again.");
      });
  };
}

export function handleDeleteTodo(todo) {
  return (dispatch) => {
    dispatch(removeTodo(todo.id));

    return API.deleteTodo(todo.id).catch((todo) => {
      dispatch(addTodo(todo));
      return alert("Remove todo error! Try again.");
    });
  };
}

export function handleToggleTodo(todo) {
  return (dispatch) => {
    dispatch(toggleTodo(todo.id));

    return API.toggleTodo(todo.id).catch((todo) => {
      dispatch(toggleTodo(todo.id));
      return alert("Toggle todo error! Try again.");
    });
  };
}
