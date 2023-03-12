import { connect } from "react-redux";
import { useEffect } from "react";
import { handleReceiveData } from "../actions/shared";
import ConnectedTodo from "./Todos";
import ConnectedGoal from "./Goals";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleReceiveData());
  }, []);

  if (props.loading === true) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <ConnectedTodo />
      <ConnectedGoal />
    </div>
  );
};

export default connect((state) => ({
  loading: state.loading,
}))(App);
