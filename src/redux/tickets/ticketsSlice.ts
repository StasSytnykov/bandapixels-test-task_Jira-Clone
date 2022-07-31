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
  reducers: {
    inProgressStatus(state, action) {
      const toggleTicket = state.entities.find((ticket) => ticket.id === action.payload)
      if (toggleTicket) {
        switch (toggleTicket.status) {
          case 'To do':
            toggleTicket.status = 'In progress'
            break
          case 'In progress':
            toggleTicket.status = 'Done'
            break
          default:
            break
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.entities = action.payload.map((ticket) => {
          return { ...ticket, status: 'To do' }
        })
        state.loading = false
      })
  },
})

export const { inProgressStatus } = ticketsSlice.actions

export default ticketsSlice.reducer
