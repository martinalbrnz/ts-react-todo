import TodoCard from "../TodoCard";

const Home = () => {
  const todoList = [
    { id: 1, title: "Super secret task", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", done: true },
    { id: 2, title: "Not so secret task", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", done: false },
    { id: 3, title: "Super cool task", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", done: false },
    { id: 4, title: "A boring task", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", done: true },
    { id: 5, title: "Another super secret task", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", done: false },
  ];
  return (
    <div>
      <h1>TODO:</h1>
      <div>
        {todoList.map((todo) => {
          return <TodoCard key={todo.id} task={todo} />;
        })}
      </div>
    </div>
  );
};

export default Home;
