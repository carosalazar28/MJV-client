import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { SignUp } from './pages/SignUp';
import { Navbar } from './components/NavBar/Navbar';
import { Profile } from './pages/Profile';
import { SignIn } from './pages/SignIn';


function PrivateRoute(props) {
  const token = localStorage.getItem('token');
  if(!token) return <Redirect to="/" />;

  return <Route {...props} />;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <PrivateRoute exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
