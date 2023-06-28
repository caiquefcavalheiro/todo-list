import { Check, Circle, ClipboardText, Trash } from "@phosphor-icons/react";
import styles from "./TodoList.module.css";

export function TodoList() {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.taskInfo}>
        <strong className={styles.taskCreate}>
          Tarefas criadas <span>5</span>
        </strong>
        <strong className={styles.taskCompleted}>
          Concluídas <span>2 de 5</span>
        </strong>
      </section>
      <section>
        <div className={styles.emptyList}>
          <ClipboardText size={54} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
        <div className={styles.contentList}>
          <article>
            <div>
              <Check />
            </div>
            <p>
              Integer urna interdum massa libero auctor neque turpis turpis
              semper. Duis vel sed fames integer.
            </p>
            <button>
              <Trash />
            </button>
          </article>
          <article>
            <div>
              <Check />
            </div>
            <p>
              Integer urna interdum massa libero auctor neque turpis turpis
              semper. Duis vel sed fames integer.
            </p>
            <button>
              <Trash />
            </button>
          </article>
          <article>
            <div>
              <Circle />
            </div>
            <p>
              Integer urna interdum massa libero auctor neque turpis turpis
              semper. Duis vel sed fames integer.
            </p>
            <button>
              <Trash />
            </button>
          </article>
        </div>
      </section>
    </main>
  );
}
