import {useState} from 'react';
import { ITask } from "../../types/Itask/ITask";

import styles from './App.module.scss';
import Form from "../../components/Form";
import Chronometer from "../../components/Chronometer";
import List from "../../components/List";

function App() {
  const [tasks, setTask] = useState<ITask[]>([])
  const [selected, setSelected] =useState<ITask>()

  function selectTask (selectedTask: ITask) {
    setSelected(selectedTask)
    setTask(previousTask => previousTask.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })))
    console.log(selected)
  }

  return (
    <div className={styles.AppStyle}>
      <Form setTask={setTask}/>
      <List 
        task={tasks}
        selectTask = {selectTask}
      />
      <Chronometer />
    </div>
  );
}

export default App;
