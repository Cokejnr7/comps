import Route from "./components/Route";
import DropDownPage from "./screens/DropdownPage";
import AccordionPage from "./screens/AccordionPage";
import ButtonPage from "./screens/ButtonPage";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <SideBar />
      <div className="col-span-5">
        <Route path="/">
          <DropDownPage />
        </Route>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
      </div>
    </div>
  );
};

export default App;
