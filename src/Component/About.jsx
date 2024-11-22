import React, { useEffect } from "react";
import {
  Button,
  Box,
  Typography,
  Container,
  Tooltip,
  IconButton,
} from "@mui/material";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";
import { GitHub, LinkedIn } from "@mui/icons-material";
import CV from "../Pdf/H-CV.pdf";
import "./Home.css";

export default function About() {
  const handleCVDownload = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Hussein_Al_Awassi_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const addAnimationClass = () => {
      const animatedElements = document.querySelectorAll(".has-animation");
      animatedElements.forEach((element) => {
        const delay = element.getAttribute("data-delay");
        setTimeout(() => {
          element.classList.add("animate-in");
        }, delay);
      });
    };
    addAnimationClass();
  }, []);

  return (
    <Box
      sx={{
        minHeight: "30vh",
        paddingTop: { xs: "50px", sm: "80px" }, // Adjusting the padding to push content down
      }}
    >
      <Box
        id="about"
        sx={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: { xs: 2, sm: 4 },
          fontFamily: '"Arial", sans-serif',
          lineHeight: "1.6",
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontWeight: "bold", mb: 3 }}
        >
          <Box className="has-animation animation-ltr" data-delay="10">
            <Typography
              variant="h3"
              component="p"
              className="bigger"
              gutterBottom
              sx={{ fontSize: { xs: "1.8rem", sm: "2.2rem" } }}
            >
              Hey, I'm Hussein
            </Typography>
          </Box>
          <Box className="has-animation animation-rtl" data-delay="20">
            <Typography
              variant="h4"
              component="p"
              className="bigger"
              sx={{ fontSize: { xs: "1.4rem", sm: "1.8rem" } }}
            >
              Fullstack Developer
            </Typography>
          </Box>
        </Typography>
        <Typography sx={{ mb: 3, fontSize: { xs: "14px", sm: "16px" } }}>
          Welcome to my personal portfolio! My name is Hussein Al Awassi, and I
          am currently studying Business Informatics at Otto-von-Guericke
          University Magdeburg. With a passion for programming and web
          development, I am constantly working to expand my knowledge and
          skills.
        </Typography>

        <Typography sx={{ mb: 3, fontSize: { xs: "14px", sm: "16px" } }}>
          I have experience with languages like Python, Java, JavaScript, and I
          work with frameworks such as React and Next.js. Alongside my studies,
          I have gained practical experience in customer service and developed
          personal projects, including portfolio websites. I am particularly
          interested in frontend development and DevOps, using tools like Docker
          and Kubernetes.
        </Typography>

        <Typography sx={{ mb: 3, fontSize: { xs: "14px", sm: "16px" } }}>
          I enjoy collaborating in teams and tackling new challenges. Feel free
          to check out my projects to learn more about my work!
        </Typography>
        <Button
          variant="outlined"
          onClick={handleCVDownload}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1rem",
            mt: 2,
            width: { xs: "100%", sm: "auto" },
          }}
        >
          CV
          <BrowserUpdatedIcon sx={{ ml: 1 }} />
        </Button>
      </Box>

      {/* Social Media Links (GitHub and LinkedIn) */}
      <Container maxWidth="md">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          py={4}
          sx={{ gap: { xs: 2, sm: 3 } }}
        >
          {/* GitHub */}
          <Tooltip title="GitHub">
            <IconButton
              color="default"
              href="https://github.com/Alawassi?tab=repositories"
              target="_blank"
            >
              <GitHub fontSize="large" />
            </IconButton>
          </Tooltip>

          {/* LinkedIn */}
          <Tooltip title="LinkedIn">
            <IconButton
              color="primary"
              href="https://www.linkedin.com/in/hussein-al-awassi-a51566230"
              target="_blank"
            >
              <LinkedIn fontSize="large" />
            </IconButton>
          </Tooltip>

          {/* Contact Button */}
          <Button
            variant="outlined"
            sx={{
              ml: { xs: 1, sm: 3 },
              fontSize: { xs: "0.8rem", sm: "1rem" },
            }}
            href="#contact"
          >
            Contact Me
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
