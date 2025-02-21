import React from "react";
import { Card, CardContent, Typography, Box, Avatar } from "@mui/material";

interface OrganizationsProps {
  orgs: { login: string; avatar_url: string; html_url: string }[];
}

const Organizations: React.FC<OrganizationsProps> = ({ orgs }) => {
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
          🏢 Organizations
        </Typography>
        <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
          {orgs.length > 0 ? (
            orgs.map((org) => (
              <a
                key={org.login}
                href={org.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Avatar
                  src={org.avatar_url}
                  sx={{ width: 50, height: 50, m: 1 }}
                />
              </a>
            ))
          ) : (
            <Typography color="textSecondary">
              No organizations found
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Organizations;
