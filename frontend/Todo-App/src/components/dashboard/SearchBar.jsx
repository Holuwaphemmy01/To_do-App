import React, { useState } from 'react';
import './searchbar.css';

const SearchBar = ({ tasks, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      onSearch([]); 
    } else {
      const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(value.toLowerCase())
      );
      onSearch(filteredTasks);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
