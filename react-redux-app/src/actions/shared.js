import API from "goals-todos-api";

export const RECEIVE_DATA = "RECEIVE_DATA";

const receiveData = (todos, goals) => {
  return {
    type: RECEIVE_DATA,
    todos,
    goals,
  };
};

export function handleReceiveData() {
  return (dispatch) => {
    Promise.all([API.fetchTodos(), API.fetchGoals()]).then(([todos, goals]) => {
      dispatch(receiveData(todos, goals));
    });
  };
}
