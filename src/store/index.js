import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import home from './module/home'

const reducer = combineReducers({
  home
});

const extensionCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, extensionCompose(applyMiddleware(thunk)));

export default store