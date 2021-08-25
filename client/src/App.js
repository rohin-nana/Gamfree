import './App.css';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    // Link,
    // Redirect
}   from 'react-router-dom';

import HomeDisplay from './HomeDisplay';
import FreeGamesDisplay from './FreeGamesDisplay';
import AboutDisplay from './AboutDisplay';
import ContactDisplay from './ContactDisplay';
import Page404 from './page404Display';

function App() {
  
  return (
    <div className="FreeGamesDisplay">
      <Router>
          <Switch>
              <Route path='/' component={HomeDisplay} exact={true}/>
              <Route path='/home' component={HomeDisplay}/>
              <Route path='/freeGames' component={FreeGamesDisplay}/>
              <Route path='/about' component={AboutDisplay}/>
              <Route path='/contact' component={ContactDisplay}/>
              <Route component={Page404}/>
          </Switch>
      </Router>
    </div>
  );
}
  
export default App;
  