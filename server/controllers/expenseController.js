const Expense = require("../models/expenseModel");

module.exports.createExpense = async (req, res) => {
  try {
    const { expenseType, description, amount } = req.body;
    const userId = req.userId;

    const newExpense = await Expense.create({
      expenseType,
      description,
      amount,
      user: userId,
    });

    res
      .status(201)
      .json({ message: "Expense created successfully", data: newExpense });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Unable to create expense", error: error.message });
  }
};

module.exports.readExpense = async (req, res) => {
  try {
    const userId = req.userId;

    const expenses = await Expense.find({ user: userId });

    if (expenses.length === 0) {
      return res
        .status(404)
        .json({ message: "No expenses found for this user" });
    }

    res
      .status(200)
      .json({ message: "Expenses retrieved successfully", data: expenses });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Unable to retrieve expenses", error: error.message });
  }
};

module.exports.updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const { expenseType, description, amount } = req.body;

    const userId = req.userId;

    console.log(
      "request comming for update",
      id,
      expenseType,
      description,
      amount,
      userId
    );
    const updatedExpense = await Expense.findOneAndUpdate(
      { _id: id, user: userId },
      { expenseType, description, amount },
      { new: true }
    );

    if (!updatedExpense) {
      return res.status(404).json({
        message: "Expense not found or you do not have permission to update",
      });
    }

    res
      .status(200)
      .json({ message: "Expense updated successfully", data: updatedExpense });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Unable to update expense", error: error.message });
  }
};

module.exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("request comming to delete", id);

    const userId = req.userId;
    console.log("userid", userId);

    const deletedExpense = await Expense.findByIdAndDelete({
      _id: id,
      user: userId,
    });

    console.log("deletedExpense", deletedExpense);
    if (!deletedExpense) {
      return res.status(404).json({
        message: "Expense not found or you do not have permission to delete",
      });
    }

    res.status(204).json({
      message: "Expense deleted successfully",
      deletedExpenseId: deletedExpense._id,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Unable to delete expense", error: error.message });
  }
};
