import axios from "axios";

const GITHUB_API_URL = "https://api.github.com/users";

export const fetchGitHubUser = async (username: string) => {
  const { data } = await axios.get(`${GITHUB_API_URL}/${username}`);
  return data;
};

export const fetchGitHubRepos = async (username: string) => {
  const { data } = await axios.get(`${GITHUB_API_URL}/${username}/repos`);
  return data;
};
