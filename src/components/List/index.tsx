import Item from './Item';
import styles from './List.module.scss'
import { ITask } from '../../types/Itask/ITask';

interface Props {
  task: ITask[];
  selectTask: (selectedTask: ITask) => void;
}

function List({task, selectTask}: Props) {

  return (
    <aside className={styles.taskList}>
      <h2> Estudos do dia </h2>
      <ul>
        {task.map((item) => (
          <Item key={item.id} {...item} selectTask={selectTask} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
