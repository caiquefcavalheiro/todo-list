import {
  Check,
  Circle,
  ClipboardText,
  PlusCircle,
  Trash,
} from "@phosphor-icons/react";
import "./App.css";

import { Header } from "./Header";

function App() {
  return (
    <>
      <Header />
      <form>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
      <main>
        <section>
          <strong>
            Tarefas criadas <span>0</span>
          </strong>
          <strong>
            Concluídas <span>0</span>
          </strong>
        </section>
        <section>
          <div>
            <ClipboardText />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
          <div>
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
    </>
  );
}

export default App;
