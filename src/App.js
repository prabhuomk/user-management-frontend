import "./styles.css";
import { Switch, Route } from "react-router-dom";
import { Header } from "./header";
import { User } from "./user";
import { EditUser } from "./edituser";
import { Home } from "./home";
import { AddUser } from "./adduser";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/users">
          <User />
        </Route>
        <Route path="/user/add">
          <AddUser />
        </Route>
        <Route path="/user/:_id">
          <EditUser />
        </Route>
      </Switch>
    </div>
  );
}
