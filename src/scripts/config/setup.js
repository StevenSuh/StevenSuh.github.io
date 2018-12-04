import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import appReducer from 'src/scripts/modules/app/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  combineReducers({
    app: appReducer,
  }),
  {},
  composeEnhancers(applyMiddleware(
    thunk,
  )),
);
