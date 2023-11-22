import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expense-slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { loggerMiddleware } from "./middlewares/logger-middleware";


// const store = configureStore({
//   reducer: {
//     EXPENSE: expenseSlice.reducer,
//   },
// });

const rootReducer = combineReducers({
  EXPENSE: expenseSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['EXPENSE'], //optional, only these reducers will be persisted
  blacklist: [''] //optional, reducers which will not be persisted
};

const persistedReducers = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).prepend(loggerMiddleware.middleware),
});
export const persistor = persistStore(store);

export { store };
