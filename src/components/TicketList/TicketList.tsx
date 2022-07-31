import Avatar from 'react-avatar'
import { useAppSelector, useAppDispatch } from '../../redux/hook'
import { changeStatus } from '../../redux/tickets/ticketsSlice'
import style from '../../style/index.module.scss'

export const TicketList: React.FC = () => {
  const tickets = useAppSelector((state) => state.tickets.entities)
  const users = useAppSelector((state) => state.users.entities)
  const dispatch = useAppDispatch()

  const sortedTicked = [...tickets].sort((firstTicket, secondTicket) => {
    const ticketA = firstTicket.status.toUpperCase()
    const ticketB = secondTicket.status.toUpperCase()
    if (ticketA < ticketB) {
      return 1
    }
    if (ticketA > ticketB) {
      return -1
    }

    return 0
  })

  return (
    <div className={style.ticketListContainer}>
      <ul className={style.ticketList}>
        {sortedTicked.map((ticket) => (
          <li
            onClick={() => dispatch(changeStatus(ticket.id))}
            className={style.ticketListItem}
            key={ticket.id}
          >
            {users.map((user) => {
              if (user.id === ticket.userId) {
                return <Avatar key={ticket.id} name={user.name} round={true} size='90' />
              }
            })}
            <p className={style.ticketText}>{ticket.title}</p>
            <span className={style.ticketStatus}>{ticket.status}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
