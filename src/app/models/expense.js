import { Schema, model, models } from 'mongoose';

const ExpenseSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  cumulativecost: {
    type: Number,
    required: true
  },});

const Expense = models.Expense || model("Expense", ExpenseSchema);

export default Expense;