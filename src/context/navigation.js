import { createContext } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  return <NavigationContext.Provider>{children}</NavigationContext.Provider>;
};

export default NavigationProvider;
