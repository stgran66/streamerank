import { RootState } from 'redux/store';

export const selectStreamers = (state: RootState) => state.streamers.items;
export const selectError = (state: RootState) => state.streamers.error;
export const selectIsLoading = (state: RootState) => state.streamers.isLoading;
export const selectStreamer = (state: RootState) =>
  state.streamers.selectedItem;
