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
      if (toggleTicket?.status === 'To do') {
        toggleTicket.status = 'In progress'
      }
      // if (toggleTicket?.status === 'In progress') {
      //   toggleTicket.status = 'Done'
      // }
    },
    // doneStatus(state, action) {
    //   const toggleTicket = state.entities.find((ticket) => ticket.id === action.payload)
    //   if (toggleTicket?.status === 'In progress') {
    //     toggleTicket.status = 'Done'
    //   }
    // },
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
