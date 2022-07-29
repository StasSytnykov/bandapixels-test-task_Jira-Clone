import { createSlice } from '@reduxjs/toolkit'
import { Tickets, fetchTickets } from './ticketsOperation'

type TicketsState = {
  entities: Tickets[]
  loading: boolean
  error: string | null
}

const initialState = {
  entities: [],
  loading: false,
  error: null,
} as TicketsState

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.entities = action.payload
        state.error = null
      })
  },
})

export default ticketsSlice.reducer
