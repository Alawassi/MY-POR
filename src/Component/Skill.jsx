import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import NodeJSIcon from "../Images/icons8-nodejs-48.png";
import ReactIcon from "../Images/react.png";
import FigmaIcon from "../Images/figma.png";
import DockerIcon from "../Images/docker.png";
import GitIcon from "../Images/social.png";
import SapIcon from "../Images/sap.png";

// Styling for SkillBox component
const SkillBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center", // Centers content vertically inside the box
  padding: theme.spacing(2),
  margin: theme.spacing(2),
  textAlign: "center",
  flex: "1 1 100px",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  "&:hover": {
    transform: "scale(1.1)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    flex: "1 1 200px",
  },
}));

// Styling for skill images
const SkillImage = styled("img")(({ theme }) => ({
  width: "50px",
  height: "50px",
  marginBottom: theme.spacing(1),
  [theme.breakpoints.up("md")]: {
    marginRight: theme.spacing(1),
  },
}));

// Styling for the skill container
const SkillContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center", // Centers items horizontally
  alignItems: "center", // Centers items vertically
  border: "4px solid #A8EFFF",
  borderRadius: "16px",
  padding: theme.spacing(2),
  margin: theme.spacing(2),
}));

// Skill data
const skills = [
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
  },
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    imageUrl: NodeJSIcon,
  },
  {
    imageUrl: ReactIcon,
  },
  {
    imageUrl: "https://www.webreflection.co.uk/img/html5.svg",
  },
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
  },
  {
    imageUrl: GitIcon,
  },
  {
    imageUrl: SapIcon,
  },
  {
    imageUrl: DockerIcon,
  },
  {
    imageUrl: FigmaIcon,
  },
];

export default function Skills() {
  return (
    <Box
      id="skill"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3" align="center" gutterBottom>
        My Skills
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={8}>
          <SkillContainer>
            {skills.map((skill, index) => (
              <SkillBox key={index}>
                <SkillImage src={skill.imageUrl} alt={skill.name} />
                <Typography variant="subtitle1">{skill.name}</Typography>
              </SkillBox>
            ))}
          </SkillContainer>
        </Grid>
      </Grid>
    </Box>
  );
}
