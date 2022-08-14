import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { combineReducers } from 'redux';

import { reducers } from './reducers';

const rootReducer = combineReducers({ ...reducers });

export type AppState = ReturnType<typeof rootReducer>;

const isDev: boolean = process.env.NODE_ENV === 'development';

const initStore = (initial?: AppState): EnhancedStore<AppState> => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initial,
    devTools: isDev,
  });

  return store;
};

export function useStore(initialState) {
  return useMemo(() => initStore(initialState), [initialState]);
}
