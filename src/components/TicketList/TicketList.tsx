import Avatar from 'react-avatar'
import { useAppSelector, useAppDispatch } from '../../redux/hook'
import { changeStatus } from '../../redux/tickets/ticketsSlice'
import style from '../../style/index.module.scss'

export const TicketList: React.FC = () => {
  const tickets = useAppSelector((state) => state.tickets.entities)
  const users = useAppSelector((state) => state.users.entities)
  const dispatch = useAppDispatch()

  return (
    <div className={style.ticketListContainer}>
      <ul className={style.ticketList}>
        {tickets.map((ticket) => (
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
            <p>{ticket.title}</p>
            <span>{ticket.status}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
