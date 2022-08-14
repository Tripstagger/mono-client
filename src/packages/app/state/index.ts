import { configureStore, StateFromReducersMapObject } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { combineReducers } from 'redux';

import { reducers } from './reducers';

const rootReducer = combineReducers({ ...reducers });

export type AppState = StateFromReducersMapObject<typeof rootReducer>;

const isDev: boolean = process.env.NODE_ENV === 'development';

const initStore = (initial?: AppState) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initial,
    devTools: isDev
  });

  return store;
};

export function useStore(initialState?: AppState) {
  return useMemo(() => initStore(initialState), [initialState]);
}
