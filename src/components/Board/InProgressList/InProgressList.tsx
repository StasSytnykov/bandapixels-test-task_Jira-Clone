import { BoardList } from '../BoardList'
import style from '../Board.module.scss'

export const InProgressList: React.FC = () => {
  return (
    <div className={style.boardItem}>
      <h3 className={style.boardItemTitle}>In progress</h3>
      <BoardList marginReset={false} ticketStatus={'In progress'} />
    </div>
  )
}
