import React, { useState } from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const EmailSearchField = ({ onSearch }) => {
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSearch = () => {
    onSearch(email);
  };

  return ( 
    <Box>
      <TextField type="text" value={email} onChange={handleChange}/>
      <Button onClick={handleSearch}>Buscar</Button>
    </Box>
  );
};

export default EmailSearchField;