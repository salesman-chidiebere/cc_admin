import { useState } from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "../src/Layout/MainLayout";
import Login from '../src/pages/Login/Login'
import Home from "../src/pages/Home/Home"


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          {/* <Route index element={<Home />} />
          <Route path="currency" element={<Currency />} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="withdrawal" element={<Withdrawal />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="user" element={<User />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
