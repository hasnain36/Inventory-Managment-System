
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
import PurchesesReturn from './Components/PurchesesReturn';
import SalesReturn from './Components/SalesReturn';
import {Route , Routes} from 'react-router-dom';
import AllSale from './Components/AllSale';
import Signup from './Components/Signup';
import UpdateProduct from './Components/UpdateProduct';
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/allproduct' element={<AllProduct/>}/>
          <Route path='/allpurchase' element={<AllPurchases/>}/>
          <Route path='/brand' element={<Brand/>}/>
          <Route path='/category' element={<Category/>}/>
          <Route path='/createproduct' element={<CreateProduct/>}/>
          <Route path='/createpurchase' element={<CreatePurchase/>}/>
          <Route path='/createsale' element={<CreateSale/>}/>
          <Route path='/customer' element={<Customer/>}/>
          <Route path='/purchasereturn' element={<PurchesesReturn/>}/>
          <Route path='/suppliers' element={<Suppliers/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/salereturn' element={<SalesReturn/>}/>
          <Route path='/allsale' element={<AllSale/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/suppliers' element={<Suppliers/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/updateproduct' element={<UpdateProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
