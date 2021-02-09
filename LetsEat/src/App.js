import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateMeal from "./components/create-meal.component";
import Meal from "./components/meal.component";
import Kids from "./components/kids.component";


function App() {
  return (
  
  <Router>
<div className="App">
<div className="header">
  {/* header */}
  <h1>Lets Eat</h1>
</div>
{/* buttons direct to data table of adult meals and kids meals */}
<div className="buttons">
<Link className="button" to="/meal">Adult Meal</Link>
<Link className="button" to="/kids">Kids Meal</Link>

</div>
    {/* this defines our navigation path */}
      <div className="content">
        <div className="row">
          <div className="col-md-12">
            <Switch>
              <Route exact path='/' component={CreateMeal} />
              <Route path="/meal" component={Meal} />
              <Route path="/kids" component={Kids} />

            </Switch>
          </div>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;


