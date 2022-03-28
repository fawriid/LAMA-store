import React from 'react';

// components
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';

// react-router-dom
import { Navigate, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/productlist' element={<ProductList />} />
                <Route path='/productdetail' element={<ProductDetail />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='*' element={<Navigate to='/'/>} />
            </Routes>
            {/* <Home /> */}
            {/* <ProductList /> */}
            {/* <ProductDetail /> */}
            {/* <Register /> */}
            {/* <Login /> */}
            {/* <Cart /> */}
        </>
    );
};

export default App;