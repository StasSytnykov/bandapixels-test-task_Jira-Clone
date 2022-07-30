import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export type Tickets = { userId: number; id: number; title: string; completed: boolean }

export const fetchTickets = createAsyncThunk<Tickets[], undefined>(
  'tickets/fetchTickets',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
      return data
    } catch (error) {
      rejectWithValue('Server error!')
    }
  },
)
