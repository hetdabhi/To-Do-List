import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const TodoForm = ({ addNewTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addNewTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
      <TextField label="New Task" variant="outlined" fullWidth value={task} onChange={(e) => setTask(e.target.value)} />
      <Button variant="contained" color="primary" type="submit">
        Add
      </Button>
    </form>
  );
};

export default TodoForm;
