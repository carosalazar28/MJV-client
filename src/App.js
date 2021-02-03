import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { SignUp } from './pages/SignUp';
import { Navbar } from './components/Navbar';
import { Profile } from './pages/Profile';

const token = localStorage.getItem('token');

function PrivateRoute(props) {
  if(!token) return <Redirect to="/" />;

  return <Route {...props} />;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <PrivateRoute exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
