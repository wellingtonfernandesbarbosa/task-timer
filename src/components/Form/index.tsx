import React from "react";
import Button from "../Button";
import styles from './Form.module.scss'

class Form extends React.Component {
  render(): React.ReactNode {
    return (
      <form className={styles.newTask}>
        <div className={styles.inputContainer}>
          <label htmlFor="task">Add a new study</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="What do you want to study"
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="time">Time</label>
          <input
            type="time"
            step="1"
            name="time"
            id="time"
            min="00:00:00"
            required
          />
        </div>
        <Button />
      </form>
    );
  }
}

export default Form;
