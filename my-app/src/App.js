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
import Kids from './components/Category/Kids';
import HostLayout from './components/HostLayout';
import Men_shoes from './components/Category/Men_shoes';
import Mens_watches from './components/Category/Mens_watches';
import Sunglasses from './components/Category/Sunglasses';
import Women_watch from './components/Category/Women_watch';
import Women from './components/Category/Women';
import Men from './components/Category/Men';

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
      <Route exact path='/' element={<Hero/>}/>
      
      <Route path='Host' element={<HostLayout/>}>
        <Route path='kids' element={<Kids/>}/>
        <Route path='men_shoes' element={<Men_shoes/>}/>
        <Route path='men_clothes' element={<Men/>}/>
        <Route path='men_watches' element={<Mens_watches/>}/>
        <Route path="sunglasses" element={<Sunglasses/>}/>
        <Route path="women_watches" element={<Women_watch/>}/>
        <Route path="women_clothes" element={<Women/>}/>
      </Route>
      
      <Route path='details' element={ <Details/>}/>
      <Route path='cart' element={ <Cart/>}/>
      <Route path='productList/:id'element={<Details/> } />
    </Routes>
    <Footer/>
    </div>
    
  );
}

export default App;
