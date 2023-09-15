import { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

export default function SearchCountries({ onSearch }) {
  const [query, setQuery] = useState('');
  
  const handleButtonClick = () => {
    onSearch(query);
  }

  return (
    <div className="container">
      <div className="search-elements">
        <TextField
          label="Search country"
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{flexGrow: 1}}
        />
        <Button variant="contained" color="primary" onClick={handleButtonClick}>
          Search
        </Button>
      </div>
    </div>
  );
}
