import { useState } from "react";
import DropDown from "../components/DropDown";

const DropDownPage = () => {
  const [selected, setSelected] = useState(null);

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  const handleSelect = (option) => {
    setSelected(option);
  };

  return (
    <DropDown options={options} value={selected} onChange={handleSelect} />
  );
};

export default DropDownPage;
