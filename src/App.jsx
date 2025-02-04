import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Profile from './components/profile';
import Income from './components/Income';
import Expenses from './components/Expenses';
import Balance from './components/Balance';
import CategoryBreakdown from './components/CategoryBreakdown'
import './App.css';






function App() {
  const [income, setIncome] = useState();
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([]);
 


  // Load data from localStorage
  useEffect(() => {
    const storedIncome = localStorage.getItem("income");
    const storedExpenses = JSON.parse(localStorage.getItem("expenses"));
    const storedCategories = JSON.parse(localStorage.getItem("categories"));

    if (storedIncome) setIncome(Number(storedIncome));
    if (storedExpenses) setExpenses(storedExpenses);
    if (storedCategories) setCategories(storedCategories);
  }, []);
      
    // Save data to localStorage
  useEffect(() => {
    localStorage.setItem("income", income);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [income, expenses, categories]);
  

  return (
    <Router>
    <div className='Dashboard'>
      <Sidebar />
      <div className="dashboard--content">
        <Routes>
          <Route path="/" element={
            <>
              <Content/>
              <Profile/>

             
            </>
          } />
          <Route path="/income" element={<Income income={income} setIncome={setIncome} />} />
          <Route path="/Expenses" element={<Expenses expenses={expenses} setExpenses={setExpenses} categories={categories} setCategories={setCategories} />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/balance" element={<Balance income={income} expenses={expenses} />} />
          <Route path="/report" element={<CategoryBreakdown expenses={expenses}/>} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </div>
  </Router>

  )
}


function Analytics() {
  return <h1>Analytics Page</h1>
}





function Settings() {
  return <h1>Settings Page</h1>
}

function Help() {
  return <h1>Help Page</h1>
}

export default App
