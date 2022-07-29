import { TicketListItem } from './TicketListIem/TicketListItem'
import style from '../../style/App.module.scss'

export const TicketList: React.FC = () => {
  return (
    <div className={style.contentContainer}>
      <ul>
        <TicketListItem />
        <TicketListItem />
        <TicketListItem />
        <TicketListItem />
      </ul>
    </div>
  )
}
