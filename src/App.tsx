import React, { useState } from "react";
import { fetchGitHubUser, fetchGitHubRepos } from "./api/github";
import SearchBar from "./components/SearchBar";
import UserProfile from "./components/UserProfile";
import ReposList from "./components/ReposList";
import { Container, Typography } from "@mui/material";

const App: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);
  const [error, setError] = useState("");

  const handleSearch = async (username: string) => {
    setError("");
    setUser(null);
    setRepos([]);

    try {
      const userData = await fetchGitHubUser(username);
      const userRepos = await fetchGitHubRepos(username);
      setUser(userData);
      setRepos(userRepos);
    } catch {
      setError("User not found!");
    }
  };

  return (
    <Container>
      <Typography variant="h3" align="center" mt={4}>
        GitHub Finder
      </Typography>
      <SearchBar onSearch={handleSearch} />
      {error && (
        <Typography color="error" align="center" mt={2}>
          {error}
        </Typography>
      )}
      {user && <UserProfile user={user} />}
      {repos.length > 0 && <ReposList repos={repos} />}
    </Container>
  );
};

export default App;
