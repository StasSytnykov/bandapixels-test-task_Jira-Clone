import { configureStore } from '@reduxjs/toolkit'
import ticketsReducer from './tickets/ticketsSlice'
import UsersReducer from './users/usersSlice'

export const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    users: UsersReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
