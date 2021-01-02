import React from 'react';
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
import { useAppURI } from './custom-hooks/useAppURI';



function App() {

  // const [isAtWelcomeScreen, setIsAtWelcomeScreen] = useState<boolean>(true);
  
  useCustomCss_vh();
  const uri = useAppURI("table-sorter");
  console.log(uri, `${uri}/data`)

  
  return (
    <Router basename={`${uri}`}>
      <Switch>


        {/* https://stackoverflow.com/questions/42123261/programmatically-navigate-using-react-router-v4 */}
        {/* https://www.codegrepper.com/code-examples/javascript/Programmatically+navigate+using+react+router */}
        <Route path={`/welcome`} render={({history})=>(
          <Welcome onStartExploring={()=>history.push(`/data`)} />
        )}/>

          

        <Route path={`/data`}>
          <TableSorter />
        </Route>



        {/* Redirects */}
        <Route path={`/`}>
          <Redirect to={`/welcome`} />
        </Route>
        <Route path={`/*`}>
          <Redirect to={`/data`} />
        </Route>

      </Switch>
    </Router>

  );
}

export default App;
