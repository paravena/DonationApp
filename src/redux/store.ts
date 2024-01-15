import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import categoriesReducer from './reducers/categories';
import donationsReducer from './reducers/donations';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import { logger } from 'redux-logger';

const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  donations: donationsReducer,
});

const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};
const persistedReducer = persistReducer(configuration, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export type State = ReturnType<typeof store.getState>;
export default store;
export const persistor = persistStore(store);
