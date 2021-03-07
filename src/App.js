import logo from './logo.svg';
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Nomatch from './Components/Nomatch/Nomatch';
import CountryDetails from './Components/CountryDetails/CountryDetails';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path = '/home'>
          <Home></Home>
        </Route>
        <Route  exact path = '/'>
          <Home></Home>
        </Route>
        <Route  path = '/details/about/:countryId'>
          <CountryDetails></CountryDetails>
        </Route>
        <Route path ='*'>
          <Nomatch></Nomatch>
        </Route>
      </Switch>
    </Router>
      
    
  );
}

export default App;
