import { BoardList } from '../BoardList'
import style from '../../Board.module.scss'

export const DoneList: React.FC = () => {
  return (
    <div className={style.boardItem}>
      <h3 className={style.boardItemTitle}>Done</h3>
      <BoardList marginReset={false} ticketStatus={'Done'} />
    </div>
  )
}
