
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
import Purchesesreturn from './Components/Purchesesreturn'
import Salesreturn from './Components/Salesreturn'
// import Navbar from './Components/Navbar'
// import Footer from './Components/Footer'
import {Route , Routes} from 'react-router-dom';
import Purchasesreturn from './Components/Purchesesreturn';
import Salesreturn from './Components/Salesreturn';
import AllSale from './Components/AllSale';
import Signup from './Components/Signup'
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
          <Route path='/purchasereturn' element={<Purchesesreturn/>}/>
          <Route path='/salesreturn' element={<Salesreturn/>}/>
          <Route path='/suppliers' element={<Suppliers/>}/>
          <Route path='/user' element={<User/>}/>
         
          <Route path='/purchasereturn' element={<Purchasesreturn/>}/>
          <Route path='/salereturn' element={<Salesreturn/>}/>
          <Route path='/allsale' element={<AllSale/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/suppliers' element={<Suppliers/>}/>
          <Route path='/user' element={<User/>}/>

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
