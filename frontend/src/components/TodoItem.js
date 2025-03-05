import React from "react";
import { ListItem, Checkbox, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoItem = ({ task, toggleTask, removeTask }) => {
  return (
    <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
      <Checkbox checked={task.completed} onChange={() => toggleTask(task._id, task.completed)} />
      {task.title}
      <IconButton onClick={() => removeTask(task._id)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default TodoItem;
