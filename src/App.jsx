import './assets/styles/style.css';
import { Switch, Link, Route, BrowserRouter, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="screen">
        <div className="wrapper">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/" exact>
              <h2>Home Page</h2>
            </Route>
            <Route path="/about" exact>
              <h2>About Page</h2>
            </Route>
            <Route path="*" exact>
              <Redirect to="/" />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;