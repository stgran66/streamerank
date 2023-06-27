import {
  createSlice,
  AsyncThunk,
  AnyAction,
  PayloadAction,
} from '@reduxjs/toolkit';
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

// const extraActions = [getStreamers, getStreamer, addStreamer, voteStreamer];
// type actionType = 'fulfilled' | 'pending' | 'rejected';
// const getActionsByType = (type: actionType) =>
//   extraActions.map((action) => action[type]);

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

      .addCase(getStreamers.rejected, (state, action) => {
        state.error =
          action.payload !== undefined ? action.payload : 'unknown error';
        state.isLoading = false;
      })
      .addCase(getStreamer.fulfilled, (state, action) => {
        state.selectedItem = action.payload;
        state.error = null;
        state.isLoading = false;
      })

      .addCase(getStreamer.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.payload !== undefined ? action.payload : 'unknown error';
      })
      .addCase(addStreamer.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
        state.error = null;
        state.isLoading = false;
      })

      .addCase(addStreamer.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.payload !== undefined ? action.payload : 'unknown error';
      })
      .addCase(voteStreamer.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
        if (action.payload._id === state.selectedItem?._id) {
          state.selectedItem = action.payload;
        }
        state.error = null;
        state.isLoading = false;
      })
      .addCase(voteStreamer.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.payload !== undefined ? action.payload : 'unknown error';
      })
      .addMatcher(isPendingAction, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.isLoading = false;
        state.error =
          action.payload !== undefined ? action.payload : 'unknown error';
      });
  },
});

export const streamersReducer = StreamersSlice.reducer;
