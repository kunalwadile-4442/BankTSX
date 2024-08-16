import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import moneyReducer from "./reducer/allreducer";
// import { InitialStateTSX, MoneyActionTypesTSX } from "../model/typetsx";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, moneyReducer);

const rootReducer = combineReducers({
  money: persistedReducer,
});

export type RootStateTSX = ReturnType<typeof rootReducer>;

const store: any = configureStore({
  reducer: rootReducer,
});

const persistor = persistStore(store);

export { store, persistor };
