import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userRedux";
import productReducer from "./productRedux";
import siteReducer from "./SiteRedux"
import SupplierProductRedux from "./SupplierProductRedux";
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
import breadcrumbReducer from "./breadcrumbRedux";
import inventoryItemReducer from "./inventoryItemRedux";
import categoryReducer from "./categoryRedux";
import inventoryReducer from "./inventoryRedux";
import materialRequestReducer from "./materialRequestRedux";
import dispatchRedux from "./dispatchRedux";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  site:siteReducer,
  breadcrumb: breadcrumbReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
