//import logo from './logo.svg';
import "./App.css";
import Login from "./Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./Register";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
