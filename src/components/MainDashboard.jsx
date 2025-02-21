import React, { useState, useEffect } from 'react'
import { Routes,Route } from 'react-router-dom'
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import Income from '../components/Income';
import Expenses from '../components/Expenses';
import Balance from '../components/Balance';
import CategoryBreakdown from '../components/CategoryBreakdown';
import Settings from '../components/Settings';
import "../styles/MainDashboard.css"









function App() {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([]);
 
  useEffect(() => {
    localStorage.setItem("income", income);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [income, expenses, categories]);
  
 


   // Load initial data from localStorage
   useEffect(() => {
    const loadInitialData = () => {
      const storedIncome = Number(localStorage.getItem('income')) || 0;
      const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
      const storedCategories = JSON.parse(localStorage.getItem('categories')) || [];
      
      setIncome(storedIncome);
      setExpenses(storedExpenses);
      setCategories(storedCategories);
    };

    loadInitialData();
  }, []);
  // Income persistence
  useEffect(() => {
    localStorage.setItem('income', income.toString());
  }, [income]);
      
    // Save data to localStorage
  useEffect(() => {
    localStorage.setItem("income", income);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [income, expenses, categories]);
  

  return (
    <div className='main-dashboard'>
       
   
    
      <div className='Dashboard'>
        <Sidebar />
        <div className="dashboard--content">
        <Routes>
            
            <Route path="/" element={
              <>
                <Content/>
              
              </>
            } />
            <Route path="/income" element={<Income income={income} setIncome={setIncome} />} />
            <Route path="/expenses" element={<Expenses expenses={expenses} setExpenses={setExpenses} categories={categories} setCategories={setCategories} />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/balance" element={<Balance income={income} expenses={expenses} />} />
            <Route path="/report" element={<CategoryBreakdown expenses={expenses}/>} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/help" element={<Help />} />  
          </Routes>
          
        </div>
      </div>
    
  
  

    </div>

  )
}


function Analytics() {
  return <h1>Analytics Page</h1>
}







function Help() {
  return <h1>Help Page</h1>
}

export default App
