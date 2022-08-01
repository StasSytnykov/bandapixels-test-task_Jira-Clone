import Avatar from 'react-avatar'
import { useAppSelector, useAppDispatch } from 'redux/hook'
import { changeStatus } from 'redux/tickets/ticketsSlice'
import style from './TicketList.module.scss'

export const TicketList: React.FC = () => {
  const tickets = useAppSelector((state) => state.tickets.entities)
  const users = useAppSelector((state) => state.users.entities)
  const dispatch = useAppDispatch()

  const sortedTicked = [...tickets].sort((firstTicket, secondTicket) =>
    secondTicket.status.localeCompare(firstTicket.status),
  )

  return (
    <div className={style.ticketListContainer}>
      <ul className={style.ticketList}>
        {sortedTicked.map((ticket) => (
          <li
            onClick={() => dispatch(changeStatus(ticket.id))}
            className={style.ticketListItem}
            key={ticket.id}
          >
            {users.map(
              (user) =>
                user.id === ticket.userId && (
                  <Avatar key={ticket.id} name={user.name} round size='90' />
                ),
            )}
            <p className={style.ticketText}>{ticket.title}</p>
            <span className={style.ticketStatus}>{ticket.status}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
