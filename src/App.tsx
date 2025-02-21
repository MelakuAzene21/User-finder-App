import React, { useState } from "react";
import { fetchGitHubUser, fetchGitHubRepos } from "./api/github";
import SearchBar from "./components/SearchBar";
import UserProfile from "./components/UserProfile";
import ReposList from "./components/ReposList";
import {
  Container,
  Typography,
  CircularProgress,
  CssBaseline,
} from "@mui/material";

const App: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (username: string) => {
    setError("");
    setUser(null);
    setRepos([]);
    setLoading(true);

    try {
      const userData = await fetchGitHubUser(username);
      const userRepos = await fetchGitHubRepos(username);
      setUser(userData);
      setRepos(userRepos);
    } catch {
      setError("User not found!");
    }

    setLoading(false);
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          GitHub Finder 🚀
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" mb={3}>
          Search for any GitHub user and view their profile, followers, and
          repositories.
        </Typography>
        <SearchBar onSearch={handleSearch} />

        {loading && <CircularProgress sx={{ mt: 4 }} />}
        {error && (
          <Typography color="error" mt={3}>
            {error}
          </Typography>
        )}
        {user && <UserProfile user={user} />}
        {repos.length > 0 && <ReposList repos={repos} />}
      </Container>
    </>
  );
};

export default App;
