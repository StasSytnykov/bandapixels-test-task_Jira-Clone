import PropTypes from 'prop-types'
import style from './TicketListItem.module.scss'

interface TicketItemProps {
  id: number
  title: string
  userId: number
}

export const TicketListItem: React.FC<TicketItemProps> = ({ id, title, userId }) => {
  return (
    <li className={style.item}>
      <span>VS</span>
      <p>{title}</p>
      <p>To do</p>
    </li>
  )
}

TicketListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
}
