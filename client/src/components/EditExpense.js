import React, { useState } from "react";
import { FaEdit, FaTrashAlt, FaEye } from "react-icons/fa";

function EditExpense({ setEditMode, expense, onUpdate }) {
  const [expenseType, setExpenseType] = useState(expense.expenseType);
  const [description, setDescription] = useState(expense.description);
  const [amount, setAmount] = useState(expense.amount);

  const handleSaveClick = () => {
    const newUpdatedExpense = {
      expenseType,
      description,
      amount,
    };
    onUpdate(expense.id, newUpdatedExpense);
    setEditMode(false); // Optionally, you can close the edit mode here
  };

  const handleCancelClick = () => {
    setEditMode(false);
  };

  return (
    <>
      <tr>
        <td>
          <input
            type="text"
            value={expenseType}
            onChange={(e) => {
              setExpenseType(e.target.value);
            }}
            className="form-control"
            placeholder="Enter Article Name"
          />
        </td>
        <td>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control "
            placeholder="Enter Author Name"
          />
        </td>
        <td>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="form-control"
            placeholder="Enter Amount"
          />
        </td>
        <td>
          <button
            type="button"
            className="btn btn-success m-2"
            onClick={() => handleSaveClick()}
          >
            Save
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleCancelClick()}
          >
            Cancel
          </button>
        </td>
      </tr>
    </>
  );
}

export default EditExpense;
