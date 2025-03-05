import React, { useState, useEffect } from "react";
import { Container, List } from "@mui/material";
import { getTasks, addTask, updateTask, deleteTask } from "../api";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";
import ThemeToggle from "../components/ThemeToggle";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [theme, setTheme] = useState("light-mode");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const addNewTask = async (title) => {
    try {
      const newTask = await addTask({ title, completed: false });
      setTasks([...tasks, newTask]); // Update state with new task
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const toggleTask = async (id, completed) => {
    try {
      const updatedTask = await updateTask(id, !completed);
      setTasks(tasks.map((task) => (task._id === id ? updatedTask : task)));
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const removeTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task._id !== id)); // Remove from state
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <ThemeToggle setTheme={setTheme} />
      <h1>Just do it.</h1>
      <TodoForm addNewTask={addNewTask} />
      <List>
        {tasks.map((task) => (
          <TodoItem key={task._id} task={task} toggleTask={toggleTask} removeTask={removeTask} />
        ))}
      </List>
    </Container>
  );
};

export default TodoApp;
