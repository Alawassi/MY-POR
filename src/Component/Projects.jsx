import React from "react";
import { Box, Typography, Grid, Card, CardContent, Button, CardMedia } from "@mui/material";

export default function Projects() {
  const educationData = [
    {
      title: "Automated topic extraction from PDF files using LDA models in Python",
      description: "",
      logo: "",
      link: "https://github.com/Alawassi/Automated-topic-extraction",
    },
    {
      title: "My Web",
      description: "Personal web development project.",
      logo: "",
      link: " https://github.com/Alawassi/MyWeb ",
    },
    {
      title: "E-Commerce",
      description: "",
      logo: "",
      link: "https://github.com/Alawassi/DEV/tree/master/ecom/frontend",
    },
    {
      title: "TODO LIST",
      description: "",
      logo: "",
      link: "https://github.com/Alawassi/TODO-LIST",
    },
    {
      title: "Portfolio",
      description: "",
      logo: "",
      link: "https://github.com/Alawassi/MyWeb ",
    },
    {
      title: "Menu",
      description: " ",
      logo: "",
      link: "https://github.com/Alawassi/Resturant-Menu",
    },
  ];

  return (
    <Box component="section" id="projects" sx={{ py: 8 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Mini Projects
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {educationData.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                boxShadow: 4,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 6,
                },
              }}
            >
              {item.logo && (
                <CardMedia
                  component="img"
                  image={item.logo}
                  alt={`${item.title} logo`}
                  sx={{ height: 140 }}
                />
              )}
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  {item.title}
                </Typography>
                {item.description && (
                  <Typography variant="body2" color="textSecondary">
                    {item.description}
                  </Typography>
                )}
              </CardContent>
              {item.link && (
                <Button
                  variant="outlined"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ m: 2, mt: "auto" }}
                >
                  More Info
                </Button>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
