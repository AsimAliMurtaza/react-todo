import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/ItemList";
import "./components/Header.css";
import { useState, useEffect } from "react";

function App() {
  const initialItems = [
    {
      id: 1,
      name: "Do Laundry",
      completed: false,
    },
    {
      id: 2,
      name: "Go to Supermarket",
      completed: false,
    },
    {
      id: 3,
      name: "Buy eggs",
      completed: false,
    },
    {
      id: 4,
      name: "Do dishes",
      completed: false,
    },
    {
      id: 5,
      name: "Go to the gym",
      completed: false,
    },
  ];

  const [todos, setTodos] = useState(initialItems);

  useEffect(() => {
    // Retrieve data from local storage
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []); // Empty dependency array to run only once when the component mounts

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleToggle = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  useEffect(() => {
    // Store data in local storage whenever todos change
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <Header />
      <Items
        items={todos}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
      <Footer itemCount={todos.length} />
    </div>
  );
}

export default App;
