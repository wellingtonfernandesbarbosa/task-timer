import {useState} from 'react';
import { ITask } from "../../types/Itask/ITask";

import styles from './App.module.scss';
import Form from "../../components/Form";
import Chronometer from "../../components/Chronometer";
import List from "../../components/List";

function App() {
  const [task, setTask] = useState<ITask[]>([])
  return (
    <div className={styles.AppStyle}>
      <Form setTask={setTask}/>
      <List task={task}/>
      <Chronometer />
    </div>
  );
}

export default App;
