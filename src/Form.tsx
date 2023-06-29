import styles from "./Form.module.css";
import { PlusCircle } from "@phosphor-icons/react";
import { Task } from "./TodoList";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface FormProps {
  addTask: (task: Task) => void;
  tasks: Task[];
}

export function Form({ addTask, tasks }: FormProps) {
  const [content, setContent] = useState("");

  const getLastTaskId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

  const handleSubmitTask = (event: FormEvent) => {
    event.preventDefault();
    addTask({ id: getLastTaskId, content, isCompleted: false });
    setContent("");
  };

  const handleNewContentInvalid = (event: InvalidEvent<HTMLInputElement>) => {
    event.target.setCustomValidity("Esse campo é obrigatório");
  };

  const handleNewContentChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity("");
    setContent(event.target.value);
  };

  const isNewContentEmpyt = content.length === 0;

  return (
    <form onSubmit={handleSubmitTask} className={styles.listForm}>
      <input
        name="content"
        onInvalid={handleNewContentInvalid}
        onChange={handleNewContentChange}
        value={content}
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <button type="submit" disabled={isNewContentEmpyt}>
        Criar
        <PlusCircle weight={"bold"} className={styles.plusIcon} size={16} />
      </button>
    </form>
  );
}
