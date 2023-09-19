import { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

import styles from './styles.module.css';

export function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  
  const handleButtonClick = () => {
    onSearch(query);
  }

  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <TextField
          label='Buscar país'
          variant='outlined'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ flexGrow: 1 }}
        />
        <Button variant='contained' color='primary' onClick={handleButtonClick}>
          Buscar
        </Button>
      </div>
    </div>
  );
}
