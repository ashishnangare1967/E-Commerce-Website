import Navbar from './components/Navbar';
import './App.css';
import "./index.css"
import Hero from './components/Hero';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Details from './components/Details';
import DefaultPage from './components/default';
import Cart from './components/Cart';
import { Route, Switch, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App ">
     <Navbar/>
    {/* <Hero/>
    <Footer/>
    <ProductList/>
    <Details/>
    <DefaultPage/> 
    <Cart/> */}
    <Routes>
      {/* <Route exact path='/' element={<ProductList/>}/> */}
      <Route path='/productList' element={<ProductList/>}/>
      <Route path='/details' element={ <Details/>}/>
      <Route path='/cart' element={ <Cart/>}/>
      <Route path='/productList/:id'element={<Details/> } />
    </Routes>
    </div>
    
  );
}

export default App;
