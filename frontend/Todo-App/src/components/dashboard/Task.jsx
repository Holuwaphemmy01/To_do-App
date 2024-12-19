import React, { useState } from 'react';
import './task.css';

const Task = ({ task, onComplete, onEdit, onDelete }) => {
  const { id, title, startDate, dueDate, description } = task;

  const handleComplete = () => {
    if (window.confirm(`Are you done with this task: "${title}"?`)) {
      onComplete(id);
    }
  };

  const handleEdit = () => {
    const updatedDescription = window.prompt(
      'Edit task description:',
      description
    );
    if (updatedDescription !== null && updatedDescription.trim() !== '') {
      onEdit(id, updatedDescription);
    }
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete the task: "${title}"?`)) {
      onDelete(id);
    }
  };

  return (
    <div className="task">
      <div className="task-header">
        <h3>{title}</h3>
      </div>
      <div className="task-dates">
        <p>Start Date: {startDate}</p>
        <p>Due Date: {dueDate}</p>
      </div>
      <div className="task-actions">
        <button className="complete-btn" onClick={handleComplete}>✔</button>
        <button className="edit-btn" onClick={handleEdit}>✎</button>
        <button className="delete-btn" onClick={handleDelete}>🗑</button>
      </div>
    </div>
  );
};

export default Task;
