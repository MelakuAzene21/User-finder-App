import React from "react";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";

interface UserProfileProps {
  user: {
    avatar_url: string;
    name: string;
    login: string;
    bio: string;
    followers: number;
    following: number;
    public_repos: number;
  };
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <Card sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
      <CardContent>
        <Box display="flex" alignItems="center" flexDirection="column">
          <Avatar src={user.avatar_url} sx={{ width: 100, height: 100 }} />
          <Typography variant="h5" mt={2}>
            {user.name || user.login}
          </Typography>
          <Typography color="textSecondary">@{user.login}</Typography>
          <Typography mt={2}>{user.bio}</Typography>
          <Box display="flex" justifyContent="space-around" width="100%" mt={2}>
            <Typography>Followers: {user.followers}</Typography>
            <Typography>Following: {user.following}</Typography>
            <Typography>Repos: {user.public_repos}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
