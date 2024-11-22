import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import onlineCuPdf from "../Pdf/online_CU.pdf";
import certificate from "../Pdf/Certificate_Winter School_Al Awassi_Hussein.pdf";

export default function Education() {
  const educationData = [
    {
      title: "Bachelor's Degree in Business Informatics",
      description: "",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/01/Otto_von_Guericke_Universit%C3%A4t_Magdeburg_Logo.svg",
      link: "https://www.ovgu.de",
    },
    {
      title: "Internship as Full Stack Developer",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmfxGOVyGk_6DlPQmlVhsCkwKqzaIcGROD0A&s",
      link: "https://www.mrcc.ovgu.de/vlba/home/",
      description: "",
    },
    {
      title: "Online Courses",
      description: "",
      logo: "https://training.nti.org.bb/wp-content/uploads/2023/02/Coursera-Logo-e1676662094759-1024x225.png.webp",
    },
    {
      title: "Google Cloud Skills Boost",
      description: "",
      logo: "https://cdn.icon-icons.com/icons2/2642/PNG/512/google_cloud_logo_icon_159333.png",
    },
  ];

  const onButtonClickPdf = () => {
    const link = document.createElement("a");
    link.href = onlineCuPdf;
    link.download = "online_CU.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onButtonClickcertificate = () => {
    const link = document.createElement("a");
    link.href = certificate;
    link.download = "certificate.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box component="section" id="education" sx={{ py: 8 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Education
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {educationData.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
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
                  sx={{ width: "80px", height: "auto", mt: 2 }}
                />
              )}
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6" component="h3" gutterBottom>
                  {item.title}
                </Typography>
                {item.description && (
                  <Typography variant="body2" color="textSecondary">
                    {item.description}
                  </Typography>
                )}
              </CardContent>
              {item.title === "Online Courses" ? (
                <Button
                  variant="outlined"
                  onClick={onButtonClickPdf}
                  sx={{ mb: 2 }}
                >
                  More Info
                </Button>
              ) : item.title === "Google Cloud Skills Boost" ? (
                <Button
                  variant="outlined"
                  onClick={onButtonClickcertificate}
                  sx={{ mb: 2 }}
                >
                  More Info
                </Button>
              ) : (
                item.link && (
                  <Button
                    variant="outlined"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ mb: 2 }}
                  >
                    More Info
                  </Button>
                )
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
