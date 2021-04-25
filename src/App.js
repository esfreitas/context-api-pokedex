
import React from 'react';
import list from './Components/List/list';
import View from './Components/View/view';
import { 
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch 
} from 'react-router-dom';
import { Link } from 'react-router-dom';
import AppProvider from './AppContext/Provider';
import AppContext from './AppContext/Context';

function App() {
  return (
    <div className="App">
       <div className="content">
     <AppProvider>
       <Router>
          <h1>
            <Link to="/pokemon/list">Context API Pokelist</Link>
          </h1>
         
           <AppContext.Consumer>
             {({ user }) => (
             <p>
               {user && user.name} you see {Object.keys(user.pokedex).length} pokemon
             </p>
             )}
           </AppContext.Consumer>
           <Switch>
              <Route path="/pokemon/list" component={list} />
              <Route path="/pokemon/:name" component={View} />
              <Route path="/" exact>
              <Redirect to="/pokemon/list" />
              </Route>
          </Switch>
       </Router>
     </AppProvider>
     </div>
    </div>
  );
}

export default App;
