import Button from "../Button";
import styles from "./Form.module.scss";
import { ITask } from "../../types/Itask/ITask";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

interface FormProps {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

function Form({ setTasks }: FormProps) {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00");

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks(oldTasks => 
      [
        ...oldTasks,
        { 
          task,
          time,
          selected: false,
          completed: false,
          id: uuidv4() },
      ]);
    
    setTask("")
    setTime("00:00")
  }

  return (
    <form className={styles.newTask} onSubmit={addTask}>
      <div className={styles.inputContainer}>
        <label htmlFor="task">Adicione um novo estudo</label>
        <input
          type="text"
          name="task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
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
          value={time}
          onChange={(event) =>
            setTime(event.target.value)
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

export default Form;

// import React, { useState } from "react";
// class Form1 extends React.Component<{
//   setTask: React.Dispatch<React.SetStateAction<ITask[]>>;
// }> {
//   state: ITask = {
//     task: "",
//     time: "00:00:00",
//   };

//   addTask(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     this.props.setTask((oldTask) => [
//       ...oldTask,
//       { ...this.state, selected: false, completed: false, id: uuidv4() },
//     ]);
//     this.setState({
//       task: "",
//       time: "00:00",
//     });
//   }

//   render(): React.ReactNode {
//     return (
//       <form className={styles.newTask} onSubmit={this.addTask.bind(this)}>
//         <div className={styles.inputContainer}>
//           <label htmlFor="task">Adicione um novo estudo</label>
//           <input
//             type="text"
//             name="task"
//             value={this.state.task}
//             onChange={(event) =>
//               this.setState({ ...this.state, task: event.target.value })
//             }
//             id="task"
//             placeholder="O  que você quer estudar?"
//             required
//           />
//         </div>

//         <div className={styles.inputContainer}>
//           <label htmlFor="time">Tempo</label>
//           <input
//             type="time"
//             step="1"
//             name="time"
//             value={this.state.time}
//             onChange={(event) =>
//               this.setState({ ...this.state, time: event.target.value })
//             }
//             id="time"
//             min="00:00:00"
//             required
//           />
//         </div>

//         <Button type="submit">Adicionar</Button>
//       </form>
//     );
//   }
// }

