import Route from "./components/Route";
import DropDownPage from "./screens/DropdownPage";
import AccordionPage from "./screens/AccordionPage";
import ButtonPage from "./screens/ButtonPage";
import ModalPage from "./screens/ModalPage";
import TablePage from "./screens/TablePage";
import SideBar from "./components/SideBar";
import CounterPage from "./screens/CounterPage";

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
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
        <Route path="/counter">
          <CounterPage initialValue={0} />
        </Route>
      </div>
    </div>
  );
};

export default App;
