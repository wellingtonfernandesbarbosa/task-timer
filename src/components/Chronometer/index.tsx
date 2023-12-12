import Button from "../Button";
import Clock from "./Clock";
import styles from "./Chronometer.module.scss";
import { ITask } from "../../types/Itask/ITask";
import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";

interface Props {
  selected: ITask | undefined
  finishTask: () => void
}

export default function Chronometer({ selected, finishTask } : Props) {
  const [time, setTime] = useState<number>()

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time))
    }
  }, [selected])

  function regress (counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter -1);
        return regress(counter -1);
      }

      finishTask();
    }, 1000)
  }

  return (
    <div className={styles.chronometer}>
      <p className={styles.title}>Escolha um card e inicie o cronômetro</p>
      <div className={styles.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button type="button" onClick={() => regress(time)}>Começar</Button>
    </div>
  );
}
