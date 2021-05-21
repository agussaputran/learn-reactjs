import "./assets/styles/style.css";
import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import Hook from "./pages/Hook";

function App() {
  return (
    <BrowserRouter>
      <div className="screen">
        <div className="wrapper">
          <Navbar />
          <hr />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/hook" exact>
              <Hook />
            </Route>
            <Route path="*" exact>
              <Redirect to="/" />
            </Route>
          </Switch>
          {<Footer content="Konten footer" />}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
