import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../styles/PortalDashboard.css';

function PortalDashboard() {
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

  return (
    <div className="Dashboard">
      <Sidebar />
      <div className="dashboard--content">
        <Outlet /> {/* Renders the matched route from App.jsx */}
      </div>
    </div>
  );
}

export default PortalDashboard;
