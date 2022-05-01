import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers/combineReducer';
import { save, load } from 'redux-localstorage-simple';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(save(), thunk))(createStore);
const store = createStoreWithMiddleware(rootReducer, load());

export default store;
