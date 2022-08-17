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
  chooseToUpdate(id: number): void;
}

const TodoCard = ({
  task,
  deleteTask,
  toggleDone,
  chooseToUpdate,
}: TodoCardProps) => {
  return (
    <div
      className={`${styles.todoCard} ${
        task.done ? styles.doneCard : styles.pendingCard
      }`}
    >
      <div className={styles.todoHeader}>
        <h2 className={styles.cardTitle}>{task.title}</h2>
        <div
          className={styles.cancelButton}
          onClick={() => deleteTask(task.id)}
        >
          <i className={`${styles.cancelIcon} fa-solid fa-remove`}></i>
        </div>
      </div>
      <p className={styles.cardDescription}>{task.description}</p>
      <div className={styles.buttonsContainer}>
        <button onClick={() => chooseToUpdate(task.id)}>Update task</button>
        <button onClick={() => toggleDone(task.id)}>
          {task.done ? "Und" : "D"}one
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
