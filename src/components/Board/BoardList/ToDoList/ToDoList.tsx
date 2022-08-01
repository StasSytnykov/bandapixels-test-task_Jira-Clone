import { BoardList } from '../BoardList'
import style from '../../Board.module.scss'

export const ToDoList: React.FC = () => {
  return (
    <div className={style.boardItem}>
      <h3 className={style.boardItemTitle}>To do</h3>
      <BoardList marginReset ticketStatus={'To do'} />
    </div>
  )
}
