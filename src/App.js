
import Brand from './Components/Brand';
import './App.css';
import AllPurchases from './Components/AllPurchases';
import Category from './Components/Category'
import Dashboard from './Components/Dashboard';
import CreateProduct from './Components/CreateProduct';
import CreatePurchase from './Components/CreatePurchase';
import CreateSale from './Components/CreateSale';
import Customer from './Components/Customer';
import AllProduct from './Components/Allproduct'
import Suppliers from './Components/Suppliers';
import User from './Components/User';
import Login from './Components/Login';
import {Route , Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      
   {/* <Dashboard/> */}
   {/* <AllPurchases/> */}
    {/* <Brand/> */}
    {/* <Category/> */}
    {/* <CreateProduct/> */}
    {/* <CreatePurchase/> */}
    {/* <CreateSale/> */}
    {/* <Customer/> */}
    {/* <AllProduct/> */}
    {/* <Suppliers/> */}
    {/* <User/> */}
    </div>
  );
}

export default App;
