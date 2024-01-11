import React from 'react';
import { Checkbox } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Items = ({ items, handleDelete, handleToggle }) => {
  return (
    <div className="items-container">
      <ul className="items-list">
        {items.map((item) => (
          <li className={`item ${item.completed ? 'completed' : ''}`} key={item.id}>
            <Checkbox
              defaultChecked={item.completed}
              onChange={() => handleToggle(item.id)}
            />
            <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
              {item.name}
            </span>
            <IconButton aria-label="delete" onClick={() => handleDelete(item.id)}>
              <DeleteIcon />
            </IconButton>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
