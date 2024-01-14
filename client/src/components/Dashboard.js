import React, { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import Table from "./Table";

const Dashboard = () => {
  const [listOfExpense, setListOfExpense] = useState([]);

  const deleteExpenseById = (id) => {
    const updatedExpenses = listOfExpense.filter((expense) => {
      return expense.id !== id;
    });
    setListOfExpense(updatedExpenses);
  };

  const updateExpenseById = (id, newUpdatedExpense) => {
    const updatedExpenses = listOfExpense.map((expense) => {
      if (expense.id === id) {
        return { ...expense, ...newUpdatedExpense };
      }
      return expense;
    });

    setListOfExpense(updatedExpenses);
  };
  const addExpense = (expenseFormData) => {
    setListOfExpense((prev) => [...prev, expenseFormData]);
    console.log(expenseFormData);
  };

  return (
    <div>
      <ExpenseForm onAddExpense={addExpense} />
      <Table
        listOfExpense={listOfExpense}
        onDelete={deleteExpenseById}
        onUpdate={updateExpenseById}
      />
    </div>
  );
};

export default Dashboard;
