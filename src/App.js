
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Productspage from './pages/Productspage'
import Cart from './pages/Cart'
import SingleProduct from './pages/SingleProduct';


function App() {
  return (
    <Router>
      <Navbar/>

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/products">
            <Productspage/>
          </Route>
          <Route exact path="/cart">
            <Cart/>
          </Route>
          <Route exact path="/products/:_id">
            <SingleProduct/>
          </Route>
        </Switch>
        
    </Router>
  );
}

export default App;
