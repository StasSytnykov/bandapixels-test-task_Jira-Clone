import Avatar from 'react-avatar'
import ClipLoader from 'react-spinners/ClipLoader'
import { useAppSelector, useAppDispatch } from 'redux/hooks/hook'
import { getTicketEntities, getUsersEntities, getUsersLoading } from 'redux/selectors/selectors'
import { changeStatus } from 'redux/tickets/ticketsSlice'
import style from './TicketList.module.scss'

export const TicketList: React.FC = () => {
  const tickets = useAppSelector(getTicketEntities)
  const users = useAppSelector(getUsersEntities)
  const isLoading = useAppSelector(getUsersLoading)
  const dispatch = useAppDispatch()

  const sortedTicked = [...tickets].sort((firstTicket, secondTicket) =>
    secondTicket.status.localeCompare(firstTicket.status),
  )

  return (
    <div className={style.ticketListContainer}>
      <ClipLoader loading={isLoading} size={150} className={style.clipLoader} />
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
