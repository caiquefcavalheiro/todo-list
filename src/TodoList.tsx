import { ClipboardText, Trash } from "@phosphor-icons/react";
import styles from "./TodoList.module.css";
import { Form } from "./Form";
import { useState } from "react";

export interface Task {
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
    const taskFilterOne = tasks.filter(
      (task) => task.content === excludeTask.content
    );
    setTasks(taskFilterOne);
  };

  const handleCompleteOrIncomplete = (changeTask: Task) => {
    changeTask.isCompleted = !changeTask.isCompleted;
    const taskExcludeOne = tasks.filter(
      (task) => task.content !== changeTask.content
    );
    taskExcludeOne.push(changeTask);
    setTasks(taskExcludeOne);
  };

  return (
    <>
      <Form addTask={addTask} />
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
          <div className={styles.emptyList}>
            <ClipboardText size={54} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
          <div className={styles.contentList}>
            <article className={styles.listItem}>
              {true ? (
                <span className={styles.check} />
              ) : (
                <span className={styles.circle} />
              )}
              <p className={false ? styles.checked : styles.unchecked}>
                Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed fames integer.
              </p>
              <button>
                <Trash size={20} />
              </button>
            </article>
            <article className={styles.listItem}>
              {true ? (
                <span className={styles.check} />
              ) : (
                <span className={styles.circle} />
              )}
              <p className={true ? styles.checked : styles.unchecked}>
                Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed fames integer.
              </p>
              <button>
                <Trash size={20} />
              </button>
            </article>
            <article className={styles.listItem}>
              {false ? (
                <span className={styles.check} />
              ) : (
                <span className={styles.circle} />
              )}
              <p className={true ? styles.checked : styles.unchecked}>
                Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed fames integer.
              </p>
              <button>
                <Trash size={20} />
              </button>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
