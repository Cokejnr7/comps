import Button from "../components/Button";
import useCounter from "../hook/use-counter";
import Panel from "../components/Panel";
import { useState } from "react";

const CounterPage = ({ initialValue }) => {
  const { counter, setCounter, increment } = useCounter(initialValue);
  const [valueToAdd, setValueToAdd] = useState(0);

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setValueToAdd(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCounter(counter + valueToAdd);
    setValueToAdd(0);
  };

  return (
    <Panel className={"m-3"}>
      <h1 className={"text-lg"}>Count: {counter}</h1>
      <div className="flex gap-2">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={increment}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          onChange={handleChange}
          value={valueToAdd || ""}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
};

export default CounterPage;
