import { createSlice, AsyncThunk, AnyAction } from '@reduxjs/toolkit';

import {
  getStreamers,
  getStreamer,
  addStreamer,
  voteStreamer,
} from './operations';
import { StreamersState } from './interfaces';

const initialState: StreamersState = {
  items: [],
  selectedItem: null,
  error: null,
  isLoading: false,
};

// Types and functions for reapeating reducers by action resolve
type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;
type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;

function isPendingAction(action: AnyAction): action is PendingAction {
  return action.type.endsWith('/pending');
}
function isRejectedAction(action: AnyAction): action is RejectedAction {
  return action.type.endsWith('/rejected');
}

const StreamersSlice = createSlice({
  name: 'streamers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStreamers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getStreamer.fulfilled, (state, action) => {
        state.selectedItem = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(addStreamer.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
        state.error = null;
        state.isLoading = false;
      })
      .addCase(voteStreamer.fulfilled, (state, action) => {
        const idx = state.items.findIndex(
          (item) => item._id === action.payload._id
        );
        state.items[idx] = action.payload;
        if (action.payload._id === state.selectedItem?._id) {
          state.selectedItem = action.payload;
        }
        state.error = null;
        state.isLoading = false;
      })
      .addMatcher(isPendingAction, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.isLoading = false;
        // @ts-ignore
        state.error =
          action.payload !== undefined ? action.payload : 'unknown error';
      });
  },
});

export const streamersReducer = StreamersSlice.reducer;
