import React from 'react';
import 'bulma/css/bulma.css'

import Nav from "./components/nav.js"
import Welcome from "./pages/welcome.js"
import Numbers from "./pages/numbers.js"
import AdditionAndSubtraction from "./pages/additionAndSubtraction.js"
import MultiplicationAndDivision from "./pages/multiplicationAndDivision.js"

import {
  BrowserRouter as Router,
  Switch,
  Route
}
from "react-router-dom";

class App extends React.Component {

  render() {
    return (
        <div className = "container">
            <Router>
                <Nav/>
                <Switch>
                
                <Route path='/react-quiz/numbers-to-1000'>
                    <Numbers/>
                </Route>
                
                <Route path='/react-quiz/addition-and-subtraction'>
                    <AdditionAndSubtraction/>
                </Route>
                
                <Route path='/react-quiz/multiplication-and-division'>
                    <MultiplicationAndDivision/>
                </Route>
                
                <Route path='/react-quiz'>
                    <Welcome/>
                </Route>

                <Route path='/'>
                    <Welcome/>
                </Route>
                </Switch>
            </Router>
        </div>
    )
  }
}

export default App;