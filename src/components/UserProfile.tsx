import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Button,
} from "@mui/material";

interface UserProfileProps {
  user: {
    avatar_url: string;
    name: string;
    username: string;
    bio: string;
    followers: number;
    following: number;
    repositories_count: number;
    html_url: string;
  };
  platform: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, platform }) => {
  return (
    <Card
      sx={{
        maxWidth: 500,
        mx: "auto",
        mt: 4,
        p: 2,
        borderRadius: 3,
        boxShadow: 5,
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center" flexDirection="column">
          <Avatar
            src={user.avatar_url}
            sx={{ width: 120, height: 120, mb: 2 }}
          />
          <Typography variant="h5" fontWeight="bold">
            {user.name || user.username}
          </Typography>
          <Typography color="textSecondary">@{user.username}</Typography>
          <Typography mt={2} textAlign="center">
            {user.bio}
          </Typography>
          <Box display="flex" justifyContent="space-around" width="100%" mt={2}>
            <Typography>👥 {user.followers} Followers</Typography>
            <Typography>🔄 {user.following} Following</Typography>
            <Typography>📦 {user.repositories_count} Repos</Typography>
          </Box>
          <Button
            variant="contained"
            color="secondary"
            href={user.html_url}
            target="_blank"
            sx={{ mt: 2 }}
          >
            View Profile on {platform}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
