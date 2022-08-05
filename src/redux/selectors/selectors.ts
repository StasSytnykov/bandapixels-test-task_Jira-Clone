import { RootState } from 'redux/store'

const getTicketEntities = (state: RootState) => state.tickets.entities

const getUsersEntities = (state: RootState) => state.users.entities

const getUsersLoading = (state: RootState) => state.users.loading

export { getTicketEntities, getUsersEntities, getUsersLoading }
