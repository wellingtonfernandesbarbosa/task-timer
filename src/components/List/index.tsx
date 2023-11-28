import Item from './Item';
import styles from './List.module.scss'
import { ITask } from '../../types/Itask/ITask';

function List({task}: {task: ITask[]}) {

  return (
    <aside className={styles.taskList}>
      <h2> Estudos do dia </h2>
      <ul>
        {task.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
