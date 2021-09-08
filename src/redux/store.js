import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE,PERSIST,PURGE,REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import contactReducer from './contact/contact-reducer';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const middleware = [...getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
}), logger];

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactReducer)
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

const exportedObject = {store, persistor};

export default exportedObject;





// const rootReducer = combineReducers({
//   contacts: contactReducer,
// });

// const persistedReducer = persistReducer(contactsPersistConfig, rootReducer);

// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// const store = createStore(rootReducer, composeWithDevTools());
// const rootReducer = combineReducers({
  //   contacts: contactReducer,
// });


