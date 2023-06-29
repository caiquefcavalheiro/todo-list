import { ClipboardText, Trash } from "@phosphor-icons/react";
import styles from "./TodoList.module.css";
import { Form } from "./Form";
import { useState } from "react";
import { ListItem } from "./ListItem";

export interface Task {
  id: number;
  content: string;
  isCompleted: boolean;
}

export function TodoList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const taskCompleted = tasks.filter((task) => task.isCompleted);
  const concludeText =
    tasks.length > 0 ? `${taskCompleted.length} de ${tasks.length}` : 0;

  const addTask = (newTask: Task) => {
    setTasks((state) => [...state, newTask]);
  };

  const handleRemoveTask = (excludeTask: Task) => {
    const taskFilterOne = tasks.filter((task) => task.id !== excludeTask.id);
    setTasks(taskFilterOne);
  };

  const handleCompleteOrIncomplete = (changeTask: Task) => {
    changeTask.isCompleted = !changeTask.isCompleted;
    const taskExcludeOne = tasks.filter((task) => task.id !== changeTask.id);
    taskExcludeOne.push(changeTask);
    taskExcludeOne.sort((task1, task2) =>
      task1.id < task2.id ? -1 : task1.id > task2.id ? 1 : 0
    );
    setTasks(taskExcludeOne);
  };

  return (
    <>
      <Form addTask={addTask} tasks={tasks} />
      <main className={styles.mainContainer}>
        <section className={styles.taskInfo}>
          <strong className={styles.taskCreate}>
            Tarefas criadas <span>{tasks.length}</span>
          </strong>
          <strong className={styles.taskCompleted}>
            Concluídas <span>{concludeText}</span>
          </strong>
        </section>
        <section>
          {tasks.length === 0 ? (
            <div className={styles.emptyList}>
              <ClipboardText size={54} />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          ) : (
            <div className={styles.contentList}>
              {tasks.map((task) => {
                return (
                  <ListItem
                    key={task.id}
                    task={task}
                    handleCompleteOrIncomplete={handleCompleteOrIncomplete}
                    handleRemoveTask={handleRemoveTask}
                  />
                );
              })}
            </div>
          )}
        </section>
      </main>
    </>
  );
}
