import { FaBeer } from "react-icons/fa";
import Button from "./components/Button";

const App = () => {
  return (
    <div className="app">
      <Button primary>
        <FaBeer />
        Click me!
      </Button>
    </div>
  );
};

export default App;
