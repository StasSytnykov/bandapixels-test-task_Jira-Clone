import { BoardList } from './BoardList/BoardList'
import style from '../../style/index.module.scss'

export const ToDoList: React.FC = () => {
  return (
    <div className={style.boardItem}>
      <h3 className={style.boardItemTitle}>To do</h3>
      <BoardList marginReset={style.boardListGapReset} ticketStatus={'To do'} />
    </div>
  )
}
