import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import Signup from './landing_page/signup/Signup';
import Login from './landing_page/signup/Login';

// import components from react-router-dom
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import { AuthContextProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import ErrorBoundary from './landing_page/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ErrorBoundary>
      <BrowserRouter>
        <AuthContextProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/products' element={<ProductPage />} />
            <Route path='/pricing' element={<PricingPage />} />
            <Route path='/support' element={<SupportPage />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          <Footer />
        </AuthContextProvider>
      </BrowserRouter>
    </ErrorBoundary>
    <ToastContainer
      position="top-right"
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </>
);


