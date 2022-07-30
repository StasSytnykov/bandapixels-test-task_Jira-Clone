import { createSlice } from '@reduxjs/toolkit'
import { Users, fetchUsers } from './usersOperation'

type UsersState = {
  entities: Users[]
  loading: boolean
  error: string | null
}

const initialState = {
  entities: [],
  loading: false,
  error: null,
} as UsersState

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.entities = action.payload
        state.loading = false
      })
  },
})

export default usersSlice.reducer
