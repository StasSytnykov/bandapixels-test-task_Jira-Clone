import { ToDoList } from './ToDoList'
import { InProgressList } from './InProgressList'
import style from '../../style/index.module.scss'

export const Board: React.FC = () => {
  return (
    <div className={style.boardContainer}>
      <ToDoList />
      <InProgressList />
      <ToDoList />
    </div>
  )
}
