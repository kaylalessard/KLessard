import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Meal from "./components/meal.component";
import Kids from "./components/kids.component";


function App() {
return (

<Router>
<div className="header">
<h1>Lets Eat</h1>
</div>
<div className="content">
<p>Which menu would you like to eat from?</p>

{/* buttons to select adult meals or kids meals */}

<div className="buttons">
<Link className="button" to="/meal">Adult's Menu</Link>
<Link className="button" to="/kids">Children's Menu</Link>
</div>

{/* this defines our navigation path */}
<div className="content">
<Switch>
<Route path="/meal" component={Meal} />
<Route path="/kids" component={Kids} />
</Switch>

</div>
</div>
</Router>
);
}

export default App;

