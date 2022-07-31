import { BoardList } from './BoardList/BoardList'
import style from '../../style/index.module.scss'

export const DoneList: React.FC = () => {
  return (
    <div className={style.boardItem}>
      <h3 className={style.boardItemTitle}>Done</h3>
      <BoardList marginReset={null} ticketStatus={'Done'} />
    </div>
  )
}
