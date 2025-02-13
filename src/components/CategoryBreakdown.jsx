import React from 'react';
import '../styles/table.css';
import ProfileHeader from './ProfileHeader';
import '../styles/CategoryBreakdown.css'

function CategoryBreakdown({ expenses }) {
  const calculateCategoryTotals = () => {
    return expenses.reduce((acc, { category, amount, date }) => {
      const existingCategory = acc[category];
      if (!existingCategory) {
        acc[category] = { total: amount, dates: [date] };
      } else {
        existingCategory.total += amount;
        existingCategory.dates.push(date);
      }
      return acc;
    }, {});
  };

  const categoryTotals = calculateCategoryTotals();

  return (
    <div className="table-container">
      <div className="catbreakdown--head">
        <h1 >Expenditure Report </h1>
          <ProfileHeader/>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th style={{ color: '#7D286D' }}>Category</th>
            <th style={{ color: '#7D286D' }}>Total Amount</th>
            <th style={{ color: '#7D286D' }}>Dates</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(categoryTotals).map(([category, totals]) => (
            <tr key={category}>
              <td>{category}</td>
              <td>${totals.total}</td>
              <td>{totals.dates.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CategoryBreakdown;
