import logo from './logo.svg';
import './App.css';
import {NavBar, Footer} from "./components";
import Auth0ProviderWithHistory from "./auth0Provider"
import { Home, Profile} from "./views";
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <Auth0ProviderWithHistory>
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <div className="mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />

          </Switch>
        </div>
      </div>
      <Footer />
    </div>
    </Auth0ProviderWithHistory>
  );
};

export default App;
