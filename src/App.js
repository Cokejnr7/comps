import DropDown from "./components/DropDown";

const App = () => {
  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  return (
    <div className="app">
      <DropDown options={options} />
    </div>
  );
};

export default App;
