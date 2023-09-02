import Button from "../components/Button";
import useCounter from "../hook/use-counter";

const CounterPage = ({ initialValue }) => {
  const { counter, increment } = useCounter(initialValue);
  return (
    <div>
      <h1>Count: {counter}</h1>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
};

export default CounterPage;
