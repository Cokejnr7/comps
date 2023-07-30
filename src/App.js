import DropDown from "./components/DropDown";

const App = () => {
  
  const options = {
    Red: "red",
    Green: "green",
    Blue: "blue",
  };

  return (
    <div className="app">
      <DropDown options={options} />
    </div>
  );
};

export default App;
