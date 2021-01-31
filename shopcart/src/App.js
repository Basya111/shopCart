import logo from './logo.svg';
import './App.css';
import { Cart } from './cmps/Cart';
import { ShopApp } from './pages/ShopApp';
import { Route , Switch } from 'react-router';
import { AppHeader } from './cmps/AppHeader'


function App() {
  return (
    <div className="App">
      <AppHeader />
      <Switch>
        <Route component={Cart} path="/cart" />
        <Route component={ShopApp} path="/" />
      </Switch>
    </div>
  );
}
export default App;


