import styles from "./ListItem.module.css";
import { Trash } from "@phosphor-icons/react";
import { Task } from "./TodoList";

interface ListeItemProps {
  handleRemoveTask: (task: Task) => void;
  handleCompleteOrIncomplete: (task: Task) => void;
  task: Task;
}

export function ListItem({
  handleRemoveTask,
  handleCompleteOrIncomplete,
  task,
}: ListeItemProps) {
  const { isCompleted, content } = task;
  return (
    <article className={styles.listItem}>
      {isCompleted ? (
        <span
          className={styles.check}
          onClick={() => handleCompleteOrIncomplete(task)}
        />
      ) : (
        <span
          className={styles.circle}
          onClick={() => handleCompleteOrIncomplete(task)}
        />
      )}
      <p className={isCompleted ? styles.checked : styles.unchecked}>
        {content}
      </p>
      <button onClick={() => handleRemoveTask(task)}>
        <Trash size={20} />
      </button>
    </article>
  );
}
