import Avatar from 'react-avatar'
import PropTypes from 'prop-types'
import { useAppDispatch, useAppSelector } from '../../../redux/hook'
import { changeStatus } from '../../../redux/tickets/ticketsSlice'
import style from '../../../style/index.module.scss'

interface BoardListProps {
  ticketStatus: string
  marginReset: string | null
}

export const BoardList: React.FC<BoardListProps> = ({ ticketStatus, marginReset }) => {
  const tickets = useAppSelector((state) => state.tickets.entities)
  const users = useAppSelector((state) => state.users.entities)
  const dispatch = useAppDispatch()

  return (
    <ul className={`${style.boardList} ${marginReset}`}>
      {tickets.map((ticket) => {
        if (ticket.status === ticketStatus) {
          return (
            <li
              className={style.ticketListItem}
              onClick={() => dispatch(changeStatus(ticket.id))}
              key={ticket.id}
            >
              {users.map((user) => {
                if (user.id === ticket.userId) {
                  return <Avatar key={ticket.id} name={user.name} round={true} size='90' />
                }
              })}
              <p>{ticket.title}</p>
            </li>
          )
        }
      })}
    </ul>
  )
}

BoardList.propTypes = {
  ticketStatus: PropTypes.string.isRequired,
  marginReset: PropTypes.string,
}
