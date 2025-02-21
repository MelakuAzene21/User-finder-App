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

interface ReposListProps {
  repos: { name: string; html_url: string; description: string }[];
}

const ReposList: React.FC<ReposListProps> = ({ repos }) => {
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
          Repositories
        </Typography>
        <List>
          {repos.slice(0, 5).map((repo) => (
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

export default ReposList;
