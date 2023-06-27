import { configureStore } from '@reduxjs/toolkit';

import { streamersReducer } from './streamers/slice';

export const store = configureStore({
  reducer: {
    streamers: streamersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
