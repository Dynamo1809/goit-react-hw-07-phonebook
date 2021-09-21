import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {  FLUSH, REHYDRATE, PAUSE,PERSIST,PURGE,REGISTER, } from 'redux-persist'; // persistStore, persistReducer,
import logger from 'redux-logger';
import {contactsReducer} from './contacts';
// import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: {
    // contacts: persistReducer(contactsPersistConfig, contactReducer)
    contacts: contactsReducer
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;



// const contactsPersistConfig = {
  //   key: 'contacts',
  //   storage,
  //   blacklist: ['filter'],
  // };
  
  // const persistor = persistStore(store);
  
  // const exportedObject = {store, persistor};


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


