import { useState } from "react";

const useCounter = (initialValue) => {
  const [counter, setCounter] = useState(initialValue);
  const increment = () => {
    setCounter(counter + 1);
  };
  return { counter, increment };
};

export default useCounter;
