import React from "react";
import { useTransactions } from "./useTransactions";

const TransactionsList = () => {
  const { transactions, addTransaction, clearTransactions } = useTransactions();

  return (
    <div>
      <h2>Transactions History</h2>
      <button onClick={() => addTransaction(100, "credit")}>
        💰 Add $100 Credit
      </button>
      <button onClick={() => addTransaction(50, "debit")}>💳 Spend $50</button>
      <button onClick={clearTransactions}>🗑️ Clear History</button>

      <ul>
        {transactions.length > 0 ? (
          transactions.map((t) => (
            <li key={t.id}>
              {t.type.toUpperCase()}: ${t.amount}
            </li>
          ))
        ) : (
          <p>No transactions yet.</p>
        )}
      </ul>
    </div>
  );
};

export default TransactionsList;
