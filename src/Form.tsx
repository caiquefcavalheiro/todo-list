import styles from "./Form.module.css";
import { PlusCircle } from "@phosphor-icons/react";

export function Form() {
  return (
    <form className={styles.listForm}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar
        <PlusCircle weight={"bold"} className={styles.plusIcon} size={16} />
      </button>
    </form>
  );
}
