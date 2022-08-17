import styles from "./todoCard.module.css";

interface Task {
  id: number;
  title: string;
  description: string;
  done: boolean;
}
interface TodoCardProps {
  task: Task;
  deleteTask(id: number): void;
  toggleDone(id: number): void;
  chooseToUpdate(id: number):void;
}

const TodoCard = ({ task, deleteTask, toggleDone, chooseToUpdate }: TodoCardProps) => {
  return (
    <div
      className={`${styles.todoCard} ${
        task.done ? styles.doneCard : styles.pendingCard
      }`}
    >
      <h2 className={styles.cardTitle}>{task.title}</h2>
      <h3>{task.id}</h3>
      <p className={styles.cardDescription}>{task.description}</p>
      <button onClick={() => toggleDone(task.id)}>
        Mark as {task.done ? "undone" : "done"}
      </button>
      <button onClick={() => chooseToUpdate(task.id)}>Update task</button>
      <button onClick={() => deleteTask(task.id)}>Delete task</button>
    </div>
  );
};

export default TodoCard;
