import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Shop from './components/Shop.jsx'
import Login from './components/Login.jsx'
import Contact from './components/Contact.jsx'
import Effect from './components/Effect.jsx'
import Api from './components/Api.jsx'
import Details from "./components/Detail.jsx"
import Apidetail from './components/Apidetail.jsx'
import SearchProvider from './SearchProvider.jsx'
import ProtectRouting from './Protectrouting.jsx'
import Cart from './components/Cart.jsx'
import Cro from './components/Crowsel.jsx'
import Checkout from "./components/Checkout.jsx";
import Backend from './backednapiss/BackendApi.jsx'
import UpdateApi from './backednapiss/UpdateApi.jsx'
import LoginOtp from './backednapiss/LoginOtp.jsx'
import Verify from './backednapiss/VerifyOtp.jsx'
import GetUsers from './backednapiss/GetUsers.jsx'
import GetUserById  from './backednapiss/GetUsers.jsx'
const App=()=>{
  return(
    <>
    <SearchProvider>
    <BrowserRouter>
    <Navbar />
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


         <Route path="/test" element={<Backend/>}/>
         <Route path ="/update" element ={<UpdateApi />} />

         <Route path="/LoginOtp" element={<LoginOtp />} />

         <Route path="/verify" element={<Verify />} />
         <Route path="/getall" element={<GetUsers />} />
         <Route path="/getUserId" element={<GetUserById />}/>

    </Routes>
    </BrowserRouter>
     </SearchProvider>
    </>
  )
}
export default App;