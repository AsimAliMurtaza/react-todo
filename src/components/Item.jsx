import React from "react";
import { Checkbox } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const Item = ({ item, handleDelete, handleToggle }) => {
  return (
    <div>
      <li className={`item ${item.completed ? "completed" : ""}`} key={item.id}>
        <Checkbox
          defaultChecked={item.completed}
          onChange={() => handleToggle(item.id)}
        />
        <span
          style={{
            textDecoration: item.completed ? "line-through" : "none",
          }}
        >
          {item.name}
        </span>
        <IconButton aria-label="delete" onClick={() => handleDelete(item.id)}>
          <DeleteIcon />
        </IconButton>
      </li>
    </div>
  );
};

export default Item;
