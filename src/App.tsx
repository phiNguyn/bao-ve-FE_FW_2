import { Routes, Route } from 'react-router-dom';
import ProductList from './user/ProductList';
import Header from './user/Header';
import AdminProductList from './admin/adminProductList';
import ProductAdd from './admin/ProductAdd';

const App = () => {
  return (
    <>
    <Header/>
  <Routes>
    
    <Route  path='/' element={<ProductList/>}  />
    <Route path='/products/:categoryId' element={<ProductList/>}  />
    <Route path='/admin' element={<AdminProductList/>}/> 
    <Route path='/admin/add' element={<ProductAdd/>}/> 
  </Routes>
    </>

  )
}

export default App