import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import MaterialLayout from './components/Layout/MaterialLayout';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';

function App() {

  return (
    <MaterialLayout>
        <CheckoutPage />
      </MaterialLayout>
  )
}

export default App
