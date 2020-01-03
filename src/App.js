import React from 'react';
import './App.css';

// Everything redux
import thunk from "redux-thunk";
import promise from 'redux-promise';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// Everything redux Persist
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

// Home Page
import HomePage from './pages/home';

// Set the persist reducer to a hash-key
const persistConfig = { key: 'zopp', storage };
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store and persist it
const createStoreWithMiddleware = applyMiddleware(promise, thunk)(createStore);
export const store = createStoreWithMiddleware(persistedReducer);
const persistor = persistStore(
  store,
  {},
  () => { console.log('Getting persisted state from store') }
);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HomePage />
      </PersistGate>
    </Provider>
  );
}

export default App;
