import React, { useState } from 'react';
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,

} from "react-router-dom";
import Sorter from './components/Sorter';
import Welcome from './components/Welcome';
import { useCustomCss_vh } from './custom-hooks/useCustomCss_vh';



function App() {

  const [isAtWelcomeScreen, setIsAtWelcomeScreen] = useState<boolean>(true);
  
  useCustomCss_vh();

  
  return (
    <Router>
      <Switch>


        {/* https://stackoverflow.com/questions/42123261/programmatically-navigate-using-react-router-v4 */}
        {/* https://www.codegrepper.com/code-examples/javascript/Programmatically+navigate+using+react+router */}
        <Route path="/welcome" render={({history})=>(
          <Welcome onStartExploring={()=>history.push("/sorter")} />
        )}/>

          

        <Route path="/sorter">
          <Sorter />
        </Route>



        {/* Redirects */}
        <Route path="/">
          <Redirect to="/welcome" />
        </Route>
        <Route path="*">
          <Redirect to="/sorter" />
        </Route>

      </Switch>
    </Router>

  );
}

export default App;
