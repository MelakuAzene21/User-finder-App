import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  Typography,
  Link,
} from "@mui/material";

interface StarredReposProps {
  repos: { name: string; html_url: string; description: string }[];
}

const StarredRepos: React.FC<StarredReposProps> = ({ repos }) => {
  return (
    <Card
      sx={{
        maxWidth: 500,
        mx: "auto",
        mt: 3,
        p: 2,
        borderRadius: 3,
        boxShadow: 5,
      }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          ⭐ Starred Repositories
        </Typography>
        <List>
          {repos.map((repo) => (
            <ListItem key={repo.name}>
              <ListItemText
                primary={
                  <Link
                    href={repo.html_url}
                    target="_blank"
                    color="primary"
                    underline="hover"
                  >
                    {repo.name}
                  </Link>
                }
                secondary={repo.description || "No description available"}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default StarredRepos;
