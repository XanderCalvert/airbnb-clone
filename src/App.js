import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./SearchPage";

function App() {
  return (
    //BEM
    <div className="App">
      <Router>
        {/* Header */}
        <Header />

        <Switch>
          {/* /search */}
          <Route path="/search">
            <SearchPage />
          </Route>
          {/* / */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
