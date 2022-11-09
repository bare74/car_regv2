import "./App.css";
import CreatePerson from "./components/Person/CreatePerson";
import ReadPerson from "./components/Person/ReadPerson";
import UpdatePerson from "./components/Person/UpdatePerson";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ColorSchemesExample from "./navigation/Navbar";
import ReadCar from "./components/Car/ReadCar";
import UpdateCar from "./components/Car/UpdateCar";
import { DashBoard } from "./components/DashBoard";
import CreateCar from "./components/Car/CreateCar";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <ColorSchemesExample />
      <div className="main">
        <Route exact path="/" component={Home} />

        <Route exact path="/person" component={DashBoard} />
        <div>
          <Route exact path="/create" component={CreatePerson} />
        </div>
        <div>
          <Route exact path="/createcar" component={CreateCar} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path="/read" component={ReadPerson} />

          <Route exact path="/car" component={ReadCar} />
        </div>
        <Route path="/update" component={UpdatePerson} />
        <Route path="/updatecar" component={UpdateCar} />
      </div>
    </Router>
  );
}

export default App;
