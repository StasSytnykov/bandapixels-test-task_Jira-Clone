import { BoardList } from './BoardList/BoardList'
import style from '../../style/index.module.scss'

export const InProgressList: React.FC = () => {
  return (
    <div className={style.boardItem}>
      <h3 className={style.boardItemTitle}>In progress</h3>
      <BoardList marginReset={null} ticketStatus={'In progress'} />
    </div>
  )
}
