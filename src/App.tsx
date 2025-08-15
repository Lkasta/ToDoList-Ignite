import styles from "./App.module.css";
import "./global.css";

import { CreateTask } from "./components/CreateTask";
import { EmptyList } from "./components/EmptyList";
import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { TasksMain } from "./components/TasksMain";
import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

interface taskProps {
  id: string;
  isComplete: boolean;
  content: string;
}

function App() {
  const [taskList, setTaskList] = useState<taskProps[]>([
    {
      id: "1",
      isComplete: false,
      content: "Fazer uma bela lista de compras",
    },
  ]);

  function hasTaskInList() {
    let has;
    taskList.length != 0 ? (has = true) : (has = false);
    return has;
  }

  function countTasksComplete() {
    let sum = 0;
    taskList.map((task) => {
      task.isComplete ? (sum += 1) : sum;
    });
    return sum;
  }

  function createTask(content: string) {
    const newTask: taskProps = {
      id: uuidv4(),
      isComplete: false,
      content: content,
    };
    setTaskList([...taskList, newTask]);
  }

  function handleDeleteTask(id: string) {
    const tasksWhithoutDeleteOne = taskList.filter((task) => {
      return task.id !== id;
    });
    setTaskList(tasksWhithoutDeleteOne);
  }

  function handleCompleteTask(id: string) {
    setTaskList((prevList) => {
      return prevList.map((task) => {
        if (task.id === id) {
          if (task.isComplete == true) {
            return { ...task, isComplete: false };
          } else {
            return { ...task, isComplete: true };
          }
        }
        return task;
      });
    });
  }

  function renderTasks() {
    return taskList.map((task) => {
      return (
        <Task
          key={task.id}
          task={task}
          content={task.content}
          isComplete={task.isComplete}
          handleDeleteTask={handleDeleteTask}
          handleCompleteTask={handleCompleteTask}
        />
      );
    });
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <CreateTask createTask={createTask} />
        <TasksMain
          createdTasks={taskList.length}
          completedTasks={countTasksComplete()}
        />
        {hasTaskInList() ? renderTasks() : <EmptyList />}
      </div>
    </div>
  );
}

export default App;
