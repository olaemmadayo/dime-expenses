import { useState, useEffect } from "react";

const STORAGE_KEY = "transactions";

export function useTransactions() {
  const [transactions, setTransactions] = useState(() => {
    // Load from localStorage on mount
    const savedTransactions = localStorage.getItem(STORAGE_KEY);
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  // Save transactions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  }, [transactions]);

  // Function to add a transaction
  const addTransaction = (amount, type) => {
    const newTransaction = { id: Date.now(), amount, type };
    setTransactions((prev) => [...prev, newTransaction]); // Update state
  };

  // Function to clear all transactions
  const clearTransactions = () => {
    setTransactions([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return { transactions, addTransaction, clearTransactions };
}
