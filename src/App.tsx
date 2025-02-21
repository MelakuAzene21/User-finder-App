import React, { useState } from "react";
import {
  fetchGitHubUser,
  fetchGitHubRepos,
  fetchGitHubStarredRepos,
  fetchGitHubOrganizations,
  fetchGitLabUser,
  fetchGitLabRepos,
  fetchGitLabStarredRepos,
  fetchDevToUser,
  fetchDevToPosts,
} from "./api/github";
import SearchBar from "./components/SearchBar";
import UserProfile from "./components/UserProfile";
import ReposList from "./components/ReposList";
import StarredRepos from "./components/StarredRepos";
import Organizations from "./components/Organizations";
import {
  Container,
  Typography,
  CircularProgress,
  CssBaseline,
} from "@mui/material";

const App: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);
  const [starredRepos, setStarredRepos] = useState<any[]>([]);
  const [organizations, setOrganizations] = useState<any[]>([]);
  const [platform, setPlatform] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (username: string, platform: string) => {
    setError("");
    setUser(null);
    setRepos([]);
    setStarredRepos([]);
    setOrganizations([]);
    setLoading(true);

    try {
      if (platform === "github") {
        const userData = await fetchGitHubUser(username);
        const userRepos = await fetchGitHubRepos(username);
        const starredReposData = await fetchGitHubStarredRepos(username);
        const organizationsData = await fetchGitHubOrganizations(username);
        setUser(userData);
        setRepos(userRepos);
        setStarredRepos(starredReposData);
        setOrganizations(organizationsData);
      } else if (platform === "gitlab") {
        const userData = await fetchGitLabUser(username);
        const userRepos = await fetchGitLabRepos(username);
        const starredReposData = await fetchGitLabStarredRepos(username);
        setUser(userData);
        setRepos(userRepos);
        setStarredRepos(starredReposData);
      } else if (platform === "devto") {
        const userData = await fetchDevToUser(username);
        const userPosts = await fetchDevToPosts(username);
        setUser(userData);
        setRepos(userPosts);
      }
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
          Multi-Platform Finder 🚀
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" mb={3}>
          Search for a GitHub, GitLab, or dev.to user and view their profile,
          repositories, and posts.
        </Typography>
        <SearchBar onSearch={handleSearch} />

        {loading && <CircularProgress sx={{ mt: 4 }} />}
        {error && (
          <Typography color="error" mt={3}>
            {error}
          </Typography>
        )}
        {user && <UserProfile user={user} platform={platform} />}
        {repos.length > 0 && <ReposList repos={repos} />}
        {starredRepos.length > 0 && <StarredRepos repos={starredRepos} />}
        {organizations.length > 0 && <Organizations orgs={organizations} />}
      </Container>
    </>
  );
};

export default App;
