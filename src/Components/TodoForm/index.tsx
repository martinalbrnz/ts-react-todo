import { useState, useEffect } from "react";
import styles from "./todoForm.module.css";
interface TodoFormProps {
  addTask(title: string, description: string): void;
  closeAddTask(): void;
  editID: number;
  todoList: Array<any>;
  updateTask(id: number, title: string, description: string): void;
}
const TodoForm = ({
  addTask,
  closeAddTask,
  editID,
  todoList,
  updateTask,
}: TodoFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    if (editID > 0) {
      const initTask = todoList.find((todo) => todo.id === editID);
      setTitle(initTask.title);
      setDescription(initTask.description);
    }
  }, [editID, todoList]);
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
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (title !== "" && description !== "") {
      if (editID > 0) {
        updateTask(editID, title, description);
      } else {
        addTask(title, description);
      }
      clearInput();
      closeAddTask();
    }
  };
  return (
    <div className={styles.formBackground}>
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <h2 className={styles.formTitle}>
            {editID > 0 ? "Update" : "New"} task
          </h2>
          <div className={styles.cancelButton} onClick={closeAddTask}>
            <i className={`${styles.cancelIcon} fa-solid fa-remove`}></i>
          </div>
        </div>
        <form className={styles.todoForm}>
          <label className={styles.formLabel} htmlFor="title">
            Title
          </label>
          <input
            className={styles.formInput}
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
          <label className={styles.formLabel} htmlFor="description">
            Description
          </label>
          <input
            className={styles.formInput}
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
          <button className={styles.saveButton} onClick={handleSubmit}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
