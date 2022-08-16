import { useState } from "react";
import styles from "./todoForm.module.css";
interface TodoFormProps {
  addTask(title: string, description: string): void;
  closeAddTask(): void;
}
const TodoForm = ({ addTask, closeAddTask }: TodoFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value);
  };
  const clearInput = () => {
    setTitle("");
    setDescription("");
  };
  const handleAddTask = (e: any) => {
    e.preventDefault();
    if (title !== "" && description !== "") {
      addTask(title, description);
      clearInput();
    }
  };
  return (
    <div className={styles.todoBackground}>
      <div className={styles.todoContainer}>
        <form>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
          <button onClick={handleAddTask}>Add task</button>
        </form>
          <button onClick={closeAddTask}>Cancel</button>
      </div>
    </div>
  );
};

export default TodoForm;
