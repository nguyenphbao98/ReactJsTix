import './App.css';
import Home from './pages/home';
import {BrowserRouter , Route , Switch ,Redirect} from 'react-router-dom';
import Login from './pages/login';
// import Header from './components/header';
// import Booking from './pages/booking';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true}>
              <Home/>
          </Route>

          <Route path="/login" exact={true}>
              <Login/>
          </Route>

          {/* redirect về trang hone */}
          <Route path="/home">
              <Redirect to="/"/>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
