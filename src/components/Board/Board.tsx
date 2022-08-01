import { ToDoList } from './BoardList/ToDoList'
import { InProgressList } from './BoardList/InProgressList'
import { DoneList } from './BoardList/DoneList'
import style from './Board.module.scss'

export const Board: React.FC = () => {
  return (
    <div className={style.boardContainer}>
      <ToDoList />
      <InProgressList />
      <DoneList />
    </div>
  )
}
