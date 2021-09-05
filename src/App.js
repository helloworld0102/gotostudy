import './App.css';
import {useRoutes} from 'hookrouter';
import routes from './route/routes'


function App() {
  const routeResults = useRoutes(routes);

  return (
    <div id ='App'>
       {routeResults}
    </div>
  );
}

export default App;
