import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function TaskForm() {
  return (
    <div>
      <Checkbox {...label} defaultChecked />
      <input type='text' value="Buy Groceries" />
      <EditIcon /><DeleteIcon />
      <Checkbox {...label}  />
      <input type='text' value="Call the doc" />
      <EditIcon /><DeleteIcon />
      <Checkbox {...label}  />
      <input type='text' value="School pickup" />
      <EditIcon /><DeleteIcon />
      <Checkbox {...label}  />
      <input type='text' value="Cook Dinner" />
      <EditIcon /><DeleteIcon />
      

    </div>
  );
}
