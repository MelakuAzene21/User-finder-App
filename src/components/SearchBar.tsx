import React, { useState } from "react";
import {
  TextField,
  Button,
  Paper,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

interface SearchBarProps {
  onSearch: (username: string, platform: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [username, setUsername] = useState("");
  const [platform, setPlatform] = useState("github");

  const handleSearch = () => {
    if (username.trim()) {
      onSearch(username, platform);
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
        label="Enter Username"
        variant="outlined"
        fullWidth
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <FormControl fullWidth>
        <InputLabel>Platform</InputLabel>
        <Select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          label="Platform"
        >
          <MenuItem value="github">GitHub</MenuItem>
          <MenuItem value="gitlab">GitLab</MenuItem>
          <MenuItem value="devto">dev.to</MenuItem>
          <MenuItem value="stackoverflow">Stack Overflow</MenuItem>
        </Select>
      </FormControl>
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
