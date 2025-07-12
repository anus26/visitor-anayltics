import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Visitor from './pages/Visitor';

const App = () => {
  return (
    <BrowserRouter>
<Routes>
  <Route path='/Dashboard' excat element={<Dashboard/>}/>
  <Route path='/Visitor' excat element={<Visitor/>}/>
</Routes>
    </BrowserRouter>
  )
}

export default App