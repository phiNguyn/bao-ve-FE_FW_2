import { Routes, Route } from 'react-router-dom';
import ProductList from './user/ProductList';
import Header from './user/Header';

const App = () => {
  return (
    <>
    <Header/>
  <Routes>
    
    <Route  path='/' element={<ProductList/>}  />
    <Route path='/products/:categoryId' element={<ProductList/>}  />
  </Routes>
    </>

  )
}

export default App