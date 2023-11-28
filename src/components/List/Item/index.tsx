import styles from "./Item.module.scss";

interface ItemProps {
  task: string;
  time: string;
}

export default function Item({ task, time }: ItemProps) {
  return (
    <li className={styles.item}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
}
