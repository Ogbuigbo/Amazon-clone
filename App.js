import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';




function App() {
  return (
  <BrowserRouter>
    
    <div className="App">
    <Switch>
          <Route path='/checkout'>
          <Header />
          <Checkout />
          </Route>
          <Route path='/'>
          <Header />
          <Home />
          </Route>
          </Switch>
      </div>
  </BrowserRouter>
  );
}

export default App;
