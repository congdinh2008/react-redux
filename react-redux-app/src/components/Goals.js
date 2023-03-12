import { connect } from "react-redux";
import { useRef } from "react";
import ListItem from "./ListItem";
import { handleCreateGoal, handleDeleteGoal } from "../actions/goals";

const Goals = (props) => {
  const inputRef = useRef();

  const addGoal = () => {
    props.dispatch(
      handleCreateGoal(
        inputRef.current.value,
        () => (inputRef.current.value = "")
      )
    );
  };

  const removeItem = (goal) => {
    props.dispatch(handleDeleteGoal(goal));
  };

  return (
    <div>
      <h2>Goal</h2>
      <input type="text" placeholder="Add Goal" ref={inputRef}></input>
      <button onClick={addGoal}>Add</button>
      <ListItem removeItem={removeItem} items={props.goals} />
    </div>
  );
};

export default connect((state) => ({
  goals: state.goals,
}))(Goals);
