import { useState } from "react";
import TodoCard from "../TodoCard";
import TodoForm from "../TodoForm";

const Home = () => {
  const initTodo = [
    {
      id: 1,
      title: "Super secret task",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      done: true,
    },
    {
      id: 2,
      title: "Not so secret task",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      done: false,
    },
    {
      id: 3,
      title: "Super cool task",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      done: false,
    },
    {
      id: 4,
      title: "A boring task",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      done: true,
    },
    {
      id: 5,
      title: "Another super secret task",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      done: false,
    },
  ];
  const [todoList, setTodoList] = useState(initTodo);
  const [addTodoModal, setAddTodoModal] = useState(false);
  const addTask = (title: string, description: string): void => {
    const id: number = todoList.reduce((prev, curr) => {
      if (prev <= curr.id) {
        return curr.id + 1;
      }
      return prev;
    }, 1);
    const newTodo = {
      id,
      title,
      description,
      done: false,
    };
    setTodoList([...todoList, newTodo]);
  };
  const deleteTask = (id: number): void => {
    const remainingTasks = todoList.filter((todo) => todo.id !== id);
    setTodoList(remainingTasks);
  };
  const toggleDone = (id: number): void => {
    const updateTodo = todoList.map((todo) => {
      return todo.id === id ? { ...todo, done: !todo.done } : todo;
    });
    setTodoList(updateTodo);
  };
  const openAddTask = () => {
    setAddTodoModal(true);
  };
  const closeAddTask = () => {
    setAddTodoModal(false);
  };

  return (
    <div>
      <h1>TODO:</h1>
      {addTodoModal && (
        <TodoForm addTask={addTask} closeAddTask={closeAddTask} />
      )}
      <button onClick={openAddTask}>Add task</button>
      <div>
        {todoList.map((todo) => {
          return (
            <TodoCard
              key={todo.id}
              task={todo}
              deleteTask={deleteTask}
              toggleDone={toggleDone}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
