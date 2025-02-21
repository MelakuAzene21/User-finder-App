import React, { useState } from "react";
import { TextField, Button, Paper, Box } from "@mui/material";

interface SearchBarProps {
  onSearch: (username: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleSearch = () => {
    if (username.trim()) {
      onSearch(username);
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        display: "flex",
        gap: 2,
        justifyContent: "center",
        borderRadius: 3,
      }}
    >
      <TextField
        label="Enter GitHub Username"
        variant="outlined"
        fullWidth
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        sx={{ textTransform: "none", fontWeight: "bold" }}
      >
        Search
      </Button>
    </Paper>
  );
};

export default SearchBar;
