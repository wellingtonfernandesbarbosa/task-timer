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

  function finishTask() {
    setSelected(undefined);

    if (selected){
      setTask(previousTask => previousTask.map(task => {
        if (task.id === selected.id) {
          return {...task,
        selected: false,
        completed: true
          }
        }

        return task;
      }))
    }
  }

  return (
    <div className={styles.AppStyle}>
      <Form setTasks={setTask}/>
      <List 
        tasks={tasks}
        selectTask = {selectTask}
      />
      <Chronometer 
        selected={selected}
        finishTask={finishTask}
      />
    </div>
  );
}

export default App;
