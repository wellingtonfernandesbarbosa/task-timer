import Item from './Item';
import styles from './List.module.scss'
import { ITask } from '../../types/Itask/ITask';

interface Props {
  tasks: ITask[];
  selectTask: (selectedTask: ITask) => void;
}

function List({tasks, selectTask}: Props) {

  return (
    <aside className={styles.taskList}>
      {tasks.length !== 0 && <h2> Estudos do dia </h2>}
      <ul>
        {tasks.map((item) => (
          <Item key={item.id} {...item} selectTask={selectTask} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
