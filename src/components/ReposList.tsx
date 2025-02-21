import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

interface ReposListProps {
  repos: { name: string; html_url: string; description: string }[];
}

const ReposList: React.FC<ReposListProps> = ({ repos }) => {
  return (
    <Card sx={{ maxWidth: 500, mx: "auto", mt: 3 }}>
      <CardContent>
        <Typography variant="h6">Repositories</Typography>
        <List>
          {repos.map((repo) => (
            <ListItem
              key={repo.name}
              button
              component="a"
              href={repo.html_url}
              target="_blank"
            >
              <ListItemText
                primary={repo.name}
                secondary={repo.description || "No description"}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ReposList;
