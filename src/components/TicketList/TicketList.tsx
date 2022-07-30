import Avatar from 'react-avatar'
import { useAppSelector, useAppDispatch } from '../../redux/hook'
import { inProgressStatus } from '../../redux/tickets/ticketsSlice'
import style from '../../style/App.module.scss'
import styleItem from '../../style/TicketStyle/TicketListItem.module.scss'
import listStyle from '../../style/TicketStyle/TicketList.module.scss'

export const TicketList: React.FC = () => {
  const tickets = useAppSelector((state) => state.tickets.entities)
  const users = useAppSelector((state) => state.users.entities)
  const dispatch = useAppDispatch()

  const handleClick = (id: number) => {
    dispatch(inProgressStatus(id))
  }

  return (
    <div className={style.contentContainer}>
      <ul className={listStyle.ticketList}>
        {tickets.map((ticket) => {
          return (
            <li onClick={() => handleClick(ticket.id)} className={styleItem.item} key={ticket.id}>
              {users.map((user) => {
                if (user.id === ticket.userId) {
                  return <Avatar key={ticket.id} name={user.name} round={true} size='90' />
                }
              })}
              <p>{ticket.title}</p>
              <span>{ticket.status}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
