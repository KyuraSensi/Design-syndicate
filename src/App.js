import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/aboutus' element={<AboutPage/>}/>
        <Route path='/products' element={<ProductPage/>}/>
      </Routes>
    </>
  );
}

export default App;
