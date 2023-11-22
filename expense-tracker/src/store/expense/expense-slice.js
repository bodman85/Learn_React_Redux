const { createSlice } = require("@reduxjs/toolkit");

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    income: 1000,
    expenseList: [],
  },
  reducers: {
    addExpenseAction: (currentSlice, action) => {
       currentSlice.expenseList.push(action.payload);
    },
    setIncomeAction: (currentSlice, action) => {
        currentSlice.income = action.payload;
     },
  },
});

export const { addExpenseAction, setIncomeAction } = expenseSlice.actions;
//expenseSlice.actions.addExpenseAction
