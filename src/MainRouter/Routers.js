import { Routes,Route } from 'react-router-dom';
import Layout from '../Componets/Layout/Layout'
import Cart from '../Componets/Cart/Cart';
import Login from '../Componets/login/Login';
import Register from '../Componets/Register/Register';

function  Routers() {
  return (
    <div>
        <Routes>
            <Route path='/' element={ <Layout/>}/>
            <Route path='/Cart' element={ <Cart/>}/>
            <Route path='/Login' element={ <Login/>}/>
            <Route path='/Register' element={ <Register/>}/>
        </Routes>
    </div>
  )
}

export default Routers