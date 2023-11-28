import { ITask } from "../../../types/Itask/ITask";
import styles from "./Item.module.scss";

export default function Item({ task, time, selected, completed, id }: ITask) {
  return (
    <li className={styles.item}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
}
