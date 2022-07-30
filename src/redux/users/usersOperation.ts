import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export type Users = { id: number; name: string; username: string; email: string; address: object }

export const fetchUsers = createAsyncThunk<Users[], undefined>(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
      return data
    } catch (error) {
      rejectWithValue('Server error!')
    }
  },
)
