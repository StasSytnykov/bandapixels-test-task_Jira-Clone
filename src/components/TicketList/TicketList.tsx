import { TicketListItem } from './TicketListIem/TicketListItem'
import { useAppSelector } from '../../redux/hook'
import style from '../../style/App.module.scss'

export const TicketList: React.FC = () => {
  const tickets = useAppSelector((state) => state.tickets.entities)

  return (
    <div className={style.contentContainer}>
      <ul>
        {tickets.map((ticket) => (
          <TicketListItem key={ticket.id} {...ticket} />
        ))}
      </ul>
    </div>
  )
}
