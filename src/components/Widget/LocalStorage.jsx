import React, { useState, useEffect } from 'react';

const LocalStorage = () => {
  const [storedData, setStoredData] = useState({});

  useEffect(() => {
    const storedDataString = localStorage.getItem('expensesData');
    if (storedDataString) {
      setStoredData(JSON.parse(storedDataString));
    }
  }, []);

  const setItem = (key, value) => {
    setStoredData((prevData) => ({ ...prevData, [key]: value }));
    localStorage.setItem('expensesData', JSON.stringify({ ...storedData, [key]: value }));
  };

  const getItem = (key) => {
    return storedData[key];
  };

  const removeItem = (key) => {
    setStoredData((prevData) => {
      const { [key]: _, ...rest } = prevData;
      return rest;
    });
    localStorage.setItem('expensesData', JSON.stringify({ ...storedData, [key]: undefined }));
  };

  const clearItem = () => {
    setStoredData({});
    localStorage.removeItem('expensesData');
  };

  return {
    setItem,
    getItem,
    removeItem,
    clearItem,
  };
};

export default LocalStorage;
