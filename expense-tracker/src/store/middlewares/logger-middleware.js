import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { setIncomeAction, addExpenseAction, incrementActionPerformed } from "store/expense/expense-slice";

export const loggerMiddleware = createListenerMiddleware();

loggerMiddleware.startListening({
  // predicate: (action) => {
  //    // return true //listen to all actions
  //    return action.type === "expenseSlice/addExpenseAction" || action.type === "expenseSlice/setIncomeAction"
  // },
  matcher: isAnyOf(setIncomeAction, addExpenseAction),
  effect: async (action, listenerAPI) => {
    console.log("Action", action);
    listenerAPI.dispatch(incrementActionPerformed());
    console.log("New store value ", listenerAPI.getState());
  },
});
