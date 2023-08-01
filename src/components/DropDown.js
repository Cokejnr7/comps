import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

const DropDown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        key={option.value}
        onClick={() => handleOptionClick(option)}
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
      >
        {option.label}
      </div>
    );
  });

  return (
    <div onClick={handleClick} className="w-48 relative">
      <div className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full">
        {value?.label || "select..."}
        <GoChevronDown className="text-lg" />
      </div>
      {isOpen && (
        <div className="absolute top-full border rounded p-3 shadow bg-white w-full">
          {renderedOptions}
        </div>
      )}
    </div>
  );
};

export default DropDown;
