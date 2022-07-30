import { useEffect } from 'react'
import { useAppDispatch } from './redux/hook'
import { fetchTickets } from './redux/tickets/ticketsOperation'
import { fetchUsers } from './redux/users/usersOperation'
import { TicketList } from './components/TicketList/TicketList'
import { Board } from './components/Board/Board'
import style from './style/App.module.scss'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
    dispatch(fetchTickets()), [dispatch]
  })

  return (
    <div className={style.app}>
      <h1 className={style.title}>Ticket list</h1>
      <TicketList />
      <h2 className={style.title}>Board</h2>
      <Board />
    </div>
  )
}

export default App
