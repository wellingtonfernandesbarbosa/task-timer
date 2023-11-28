import React from "react";
import Button from "../Button";
import styles from './Form.module.scss'
import { ITask } from "../../types/Itask/ITask";

class Form extends React.Component<{setTask: React.Dispatch<React.SetStateAction<ITask[]>>}> {
  state: ITask = {
    task: "",
    time: "00:00:00",
  };

  addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("state: ", this.state);
    this.props.setTask(oldTask => [...oldTask, {...this.state}])
  }

  render(): React.ReactNode {
    return (
      <form className={styles.newTask} onSubmit={this.addTask.bind(this)}>
        
        <div className={styles.inputContainer}>
          <label htmlFor="task">Adicione um novo estudo</label>
          <input
            type="text"
            name="task"
            value={this.state.task}
            onChange={(event) =>
              this.setState({ ...this.state, task: event.target.value })
            }
            id="task"
            placeholder="O  que você quer estudar?"
            required
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="time">Tempo</label>
          <input
            type="time"
            step="1"
            name="time"
            value={this.state.time}
            onChange={(event) =>
              this.setState({ ...this.state, time: event.target.value })
            }
            id="time"
            min="00:00:00"
            required
          />
        </div>

        <Button type="submit">Adicionar</Button>
      </form>
    );
  }
}

export default Form;
