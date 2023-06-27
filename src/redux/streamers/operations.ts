import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { NewStreamerData, Streamer, Vote, VoteData } from './interfaces';

axios.defaults.baseURL = 'https://streamerank-api.onrender.com';

export const getStreamers = createAsyncThunk<
  Streamer[],
  void,
  { rejectValue: null | string }
>('streamers/getAll', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('/streamers');
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.message);
    }
    console.log(error);
    return thunkAPI.rejectWithValue('unknown error occured');
  }
});

export const getStreamer = createAsyncThunk<
  Streamer,
  string,
  { rejectValue: null | string }
>('streamers/getById', async (id, thunkAPI) => {
  try {
    const { data } = await axios.get(`/streamers/${id}`);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.message);
    }
    console.log(error);
    return thunkAPI.rejectWithValue('unknown error occured');
  }
});

export const addStreamer = createAsyncThunk<
  Streamer,
  NewStreamerData,
  { rejectValue: null | string }
>('streamers/addStreamer', async (newStreamer, thunkAPI) => {
  try {
    const { data } = await axios.post('/streamers', newStreamer);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.message);
    }
    console.log(error);
    return thunkAPI.rejectWithValue('unknown error occured');
  }
});

export const voteStreamer = createAsyncThunk<
  Streamer,
  VoteData,
  { rejectValue: null | string }
>('streamers/voteStreamer', async ({ vote, id }, thunkAPI) => {
  try {
    const { data } = await axios.put(`/streamers/${id}/vote`, vote);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.message);
    }
    console.log(error);
    return thunkAPI.rejectWithValue('unknown error occured');
  }
});
