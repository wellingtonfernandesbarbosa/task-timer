import { ITask } from "../../../types/Itask/ITask";
import styles from "./Item.module.scss";

interface Props extends ITask {
  selectTask: (selectedTask: ITask) => void;
}

export default function Item({
  task,
  time,
  selected,
  completed,
  id,
  selectTask,
}: Props) {
  return (
    <li
      className={`${styles.item} ${selected ? styles.selectedItem : ''}`}
      onClick={() => selectTask({ task, time, selected, completed, id })}
    >
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
}
