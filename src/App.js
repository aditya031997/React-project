//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./Register";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import PrivateRoutes from "./component/PrivateRouter";
import Update from "./component/Update";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <PrivateRoutes path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/update" component={Update} />
          <PrivateRoutes path="/about" component={About} />
          <PrivateRoutes path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
