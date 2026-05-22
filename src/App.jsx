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

    </Routes>
    </BrowserRouter>
     </SearchProvider>
    </>
  )
}
export default App;