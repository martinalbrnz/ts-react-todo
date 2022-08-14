import styles from "./todoCard.module.css";

interface Task {
	title: string,
	description: string,
	done: boolean,
}
interface TodoCardProps {
  task: Task;
}

const TodoCard = ({ task }: TodoCardProps) => {
  return (
    <div
      className={`${styles.todoCard} ${
        task.done ? styles.doneCard : styles.pendingCard
      }`}
    >
      <h2 className={styles.cardTitle}>{task.title}</h2>
      <p className={styles.cardDescription}>Added: {task.description}</p>
    </div>
  );
};

export default TodoCard;
