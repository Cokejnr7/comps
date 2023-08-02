import Link from "./components/Link";
import Route from "./components/Route";
import DropDownPage from "./screens/DropdownPage";
import AccordionPage from "./screens/AccordionPage";

const App = () => {
  return (
    <div className="app">
      <Link to="/accordion">accordion</Link>
      <Link to="/dropdown">dropdown</Link>
      <Route path="/accordion">
        <AccordionPage />
      </Route>
      <Route path="/dropdown">
        <DropDownPage />
      </Route>
    </div>
  );
};

export default App;
