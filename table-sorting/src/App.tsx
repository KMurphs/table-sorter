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
  const uri = useRef(window.location.pathname.replace(/\/$/, ""));
  console.log(uri.current, `${uri.current}/sorter`)

  
  return (
    <Router>
      <Switch>


        {/* https://stackoverflow.com/questions/42123261/programmatically-navigate-using-react-router-v4 */}
        {/* https://www.codegrepper.com/code-examples/javascript/Programmatically+navigate+using+react+router */}
        <Route path={`${uri.current}/welcome`} render={({history})=>(
          <Welcome onStartExploring={()=>history.push(`${uri.current}/data`)} />
        )}/>

          

        <Route path={`${uri.current}/data`}>
          <TableSorter />
        </Route>



        {/* Redirects */}
        <Route path={`${uri.current}/`}>
          <Redirect to={`${uri.current}/welcome`} />
        </Route>
        <Route path={`${uri.current}/*`}>
          <Redirect to={`${uri.current}/data`} />
        </Route>

      </Switch>
    </Router>

  );
}

export default App;
