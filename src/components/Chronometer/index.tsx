import Button from "../Button";
import Clock from "./Clock";
import styles from "./Chronometer.module.scss";

export default function Chronometer() {
  return (
    <div className={styles.chronometer}>
      <p className={styles.title}>Escolha um card e inicie o cronômetro</p>
      <div className={styles.clockWrapper}>
        <Clock />
      </div>
      <Button type="button">Começar</Button>
    </div>
  );
}
