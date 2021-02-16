import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import CreateMeal from "./components/create-meal.component";
import Meal from "./components/meal.component";
import Kids from "./components/kids.component";


function App() {
return (

<Router>
  
<div className="header">
<h1>Lets Eat</h1>
</div>

{/* buttons direct to data table of adult meals and kids meals */}
<div className="buttons">
<Link className="button" to="/meal">Adult Meal</Link>
<Link className="button" to="/kids">Kids Meal</Link>
</div>

{/* this defines our navigation path */}
<div>
<Switch>
{/* <Route exact path='/' component={CreateMeal} /> */}
<Route path="/meal" component={Meal} />
<Route path="/kids" component={Kids} />
</Switch>
</div>
</Router>
);
}

export default App;


