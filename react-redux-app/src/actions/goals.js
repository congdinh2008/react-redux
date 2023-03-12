import API from "goals-todos-api";

export const ADD_GOAL = "ADD_GOAL";
export const REMOVE_GOAL = "REMOVE_GOAL";

const addGoal = (goal) => {
  return {
    type: ADD_GOAL,
    goal: goal,
  };
};

const removeGoal = (id) => {
  return {
    type: REMOVE_GOAL,
    id: id,
  };
};

export function handleCreateGoal(name, callback) {
  return (dispatch) => {
    return API.saveGoal(name)
      .then((goal) => {
        dispatch(addGoal(goal));
        callback();
      })
      .catch(() => {
        return alert("Create goal error! Try again.");
      });
  };
}

export function handleDeleteGoal(goal) {
  return (dispatch) => {
    dispatch(removeGoal(goal.id));

    return API.deleteGoal(goal.id).catch((goal) => {
      dispatch(addGoal(goal));
      return alert("Remove goal error! Try again.");
    });
  };
}
