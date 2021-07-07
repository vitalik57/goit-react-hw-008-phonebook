import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import filterReducer from "./clients/filterReducer/filterReduser";
import {
  clientsReducer,
  errorReducer,
  loaderReducer,
} from "./clients/clientsReducer/clientsReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { authReducers } from "./auth/authReducers";

const rootReducer = combineReducers({
  items: clientsReducer,
  filter: filterReducer,
  loader: loaderReducer,
  error: errorReducer,
});

const persistedReducer = persistReducer(
  {
    key: "auth",
    storage,
    whitelist: ["tokens"],
  },
  authReducers
);

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
    auth: persistedReducer,
  },
  middleware: middleware,
});

export const persistor = persistStore(store);
