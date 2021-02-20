import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./reducer";
import { PermissionTableInitialState } from "./demo";

import createReduxSagasMiddleware from "redux-saga";
import { rootSaga } from "./sagas";

export type RootState = {
    Permission: PermissionTableInitialState;
};

const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagas = createReduxSagasMiddleware();
export const rootState = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagas, ReduxThunk))
);

sagas.run(rootSaga);
