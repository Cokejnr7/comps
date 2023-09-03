import Button from "../components/Button";
import Panel from "../components/Panel";
import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "increment") {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === "decrement") {
    return { ...state, count: state.count - 1 };
  }
  if (action.type === "value-to-add") {
    return { ...state, valueToAdd: action.payload };
  }

  if (action.type === "value-to-add-submit") {
    return { ...state, count: state.count + action.payload, valueToAdd: 0 };
  }
  return state;
};

const CounterPage = ({ initialValue }) => {
  const [state, dispatch] = useReducer(reducer, {
    count: initialValue,
    valueToAdd: 0,
  });

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    dispatch({ type: "value-to-add", payload: value });
  };

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "value-to-add-submit", payload: state.valueToAdd });
  };

  return (
    <Panel className={"m-3"}>
      <h1 className={"text-lg"}>Count: {state.count}</h1>
      <div className="flex gap-2">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          onChange={handleChange}
          value={state.valueToAdd || ""}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
};

export default CounterPage;
