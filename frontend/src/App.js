import './App.css';
import './responsive.css';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import CartScreen from './screens/CartScreen';
import Login from './screens/Login';
import Register from './screens/Register';
import SingleProduct from './screens/SingleProduct';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/cart/:id' element={<CartScreen/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/products/:id' element={<SingleProduct/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
