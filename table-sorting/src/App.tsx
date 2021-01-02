import React, { useRef } from 'react';
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,

} from "react-router-dom";
import TableSorter from './components/TableSorter';
import Welcome from './components/Welcome';
import { useCustomCss_vh } from './custom-hooks/useCustomCss_vh';



function App() {

  // const [isAtWelcomeScreen, setIsAtWelcomeScreen] = useState<boolean>(true);
  
  useCustomCss_vh();
  const uri = useRef(window.location.pathname);
  console.log(uri.current)

  
  return (
    <Router>
      <Switch>


        {/* https://stackoverflow.com/questions/42123261/programmatically-navigate-using-react-router-v4 */}
        {/* https://www.codegrepper.com/code-examples/javascript/Programmatically+navigate+using+react+router */}
        <Route path={`${uri}/welcome`} render={({history})=>(
          <Welcome onStartExploring={()=>history.push("/sorter")} />
        )}/>

          

        <Route path={`${uri}/sorter`}>
          <TableSorter />
        </Route>



        {/* Redirects */}
        <Route path="/">
          <Redirect to={`${uri}/welcome`} />
        </Route>
        <Route path="*">
          <Redirect to={`${uri}/sorter`} />
        </Route>

      </Switch>
    </Router>

  );
}

export default App;
