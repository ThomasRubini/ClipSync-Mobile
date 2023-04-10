import {createStore, combineReducers} from 'redux';
import {userReducer} from './reducers';
import {persistedUserReducer} from './persistance';
import {persistStore} from 'redux-persist';

export const store = createStore(
  combineReducers({
    persistedUserReducer,
  }),
);

export const persistor = persistStore(store);
