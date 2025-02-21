import axios from "axios";

// Base API URLs
const GITHUB_API_URL = "https://api.github.com/users";
const GITLAB_API_URL = "https://gitlab.com/api/v4/users";
const DEVTO_API_URL = "https://dev.to/api/users";

// Fetch GitHub user data
export const fetchGitHubUser = async (username: string) => {
  const { data } = await axios.get(`${GITHUB_API_URL}/${username}`);
  return data;
};

// Fetch GitHub repositories
export const fetchGitHubRepos = async (username: string) => {
  const { data } = await axios.get(
    `${GITHUB_API_URL}/${username}/repos?per_page=5&sort=updated`
  );
  return data;
};

// Fetch GitHub starred repositories
export const fetchGitHubStarredRepos = async (username: string) => {
  const { data } = await axios.get(
    `${GITHUB_API_URL}/${username}/starred?per_page=5`
  );
  return data;
};

// Fetch GitHub organizations
export const fetchGitHubOrganizations = async (username: string) => {
  const { data } = await axios.get(`${GITHUB_API_URL}/${username}/orgs`);
  return data;
};

// Fetch GitLab user data
export const fetchGitLabUser = async (username: string) => {
  const { data } = await axios.get(`${GITLAB_API_URL}/${username}`);
  return data;
};

// Fetch GitLab repositories
export const fetchGitLabRepos = async (username: string) => {
  const { data } = await axios.get(`${GITLAB_API_URL}/${username}/projects`);
  return data;
};

// Fetch GitLab starred repositories (approximated via public repos)
export const fetchGitLabStarredRepos = async (username: string) => {
  const { data } = await axios.get(
    `${GITLAB_API_URL}/${username}/starred_projects`
  );
  return data;
};

// Fetch dev.to user data
export const fetchDevToUser = async (username: string) => {
  const { data } = await axios.get(`${DEVTO_API_URL}/@${username}`);
  return data;
};

// Fetch dev.to posts (as a form of repositories)
export const fetchDevToPosts = async (username: string) => {
  const { data } = await axios.get(`${DEVTO_API_URL}/@${username}/articles`);
  return data;
};


// Stack Overflow API URL
const STACK_OVERFLOW_API_URL = "https://api.stackexchange.com/2.3/users";

// Fetch Stack Overflow user data
export const fetchStackOverflowUser = async (userId: string) => {
    const { data } = await axios.get(`${STACK_OVERFLOW_API_URL}/${userId}?site=stackoverflow`);
    return data.items[0]; // Stack Exchange API returns an array of items
};

// Fetch Stack Overflow user answers count
export const fetchStackOverflowAnswers = async (userId: string) => {
    const { data } = await axios.get(`${STACK_OVERFLOW_API_URL}/${userId}/answers?site=stackoverflow`);
    return data.items.length; // Count of answers
};
