import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import CourtTabs from "./WOD/Trie.court.tabs";
import LongTabs from "./WOD/Trie.long.tabs";
import MoyenTabs from "./WOD/Trie.moyen.tabs";
import PrTabs from "./PR/Pr.tabs";
import PrSolo from "./PR/Pr.delete.confirm";
import Test from "./Test";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profile from "./Profile";
import PrivateRoute from "./Auth0/private-route"

const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>  
          <Route path="/mouvementsTabs" exact>
            <PrTabs />
          </Route>
          <Route path="/courtTabs" exact>
            <CourtTabs />
          </Route>
          <Route path="/moyenTabs" exact>
            <MoyenTabs />
          </Route>
          <Route path="/longTabs" exact>
            <LongTabs />
          </Route>
          <Route path="/test" exact>
            <Test />
          </Route>
          <PrivateRoute path="/profile" component={Profile} />
            
          
          <Route path="/mouvements/:id" component={PrSolo} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
