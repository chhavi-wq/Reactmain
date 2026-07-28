import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home.jsx'
import Shop from './components/Shop.jsx'
import Login from './components/Login.jsx'
import Contact from './components/Contact.jsx'
import Effect from './components/Effect.jsx'
import Api from './components/Api.jsx'
import { Navigate } from 'react-router-dom'
import Details from "./components/Detail.jsx"
import Apidetail from './components/Apidetail.jsx'
import SearchProvider from './SearchProvider.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectRouting from './Protectrouting.jsx'
import Cart from './components/Cart.jsx'
import Cro from './components/Crowsel.jsx'
import Checkout from "./components/Checkout.jsx";
import VerifyOtp from './components/prop/VerifyOtp.jsx'
import AdminUsers from "./AdminUsers.jsx"
import Orders from "./components/Orders.jsx"
import AdminRoute from "./AdminRoute.jsx"
const App=()=>{
  console.log("Role:", localStorage.getItem("role"));
console.log("Is Admin:", localStorage.getItem("role") === "admin");
  return(
    <>
    <SearchProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <ProtectRouting>
        <Home />
        </ProtectRouting>
        } />
      <Route path='/shop' element={<Shop />} />
      <Route path='/login' element={<Login />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<h1>404 Not Found</h1>} />
      <Route path='/effect' element={<Effect />} />
      <Route path='/api' element={<Api />} />
      <Route path='/detail/:id' element={<Details />} />
       <Route path='/apis/:id' element={<Apidetail />} />
       <Route path='/cart' element={<Cart/>}/>
         <Route path='/crr' element={<Cro/>}/>
         <Route path='/checkout' element={<Checkout/>} />      
         <Route path="/verifyotp" element={<VerifyOtp />} />
            <Route path="/admin" element={
        <AdminRoute>
          <AdminUsers />
        </AdminRoute> } />

        <Route path="/orders" element={<Orders />} />

    </Routes>
   <ToastContainer
  position="top-right"
  autoClose={3000}
  newestOnTop
  closeButton={true}
  toastClassName="rounded-2xl"
/>
    </BrowserRouter>
     </SearchProvider>
    </>
  )
}
export default App;