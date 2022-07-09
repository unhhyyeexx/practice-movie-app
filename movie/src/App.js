// router는 URL을 보고있는 component
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Home from "./routes/Home"
import Detail from './routes/Detail';


function App() {
  return <Router>
    <Switch>
      {/* switch가 하는 일: router를 찾는 일(url을 찾음) */}
      <Route path="/movie">
        <Detail/>
      </Route>

      <Route path="/">
        <Home /> 
      </Route>
      

    </Switch>
  </Router>
}

export default App;
