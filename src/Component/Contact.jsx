import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Container,
} from "@mui/material";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    comment: "",
  });
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", " ");

    try {
      const response = await fetch(" ", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: " Great",
          text: "Your message was sent successfully!",
          icon: "success",
        });
        event.target.reset();
        setFormData({ email: "", name: "", comment: "" });
      } else {
        console.log("Error", data);
        setResult(data.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setResult("An error occurred. Please try again.");
    }
  };

  const isFormValid = formData.email && formData.name && formData.comment;

  return (
    <Box id="contact" sx={{ py: 4, fontSize: "1.2em" }}>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          Contact Me
        </Typography>

        <form onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="email"
                label="Email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="text"
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={!isFormValid} 
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" align="center" color="textSecondary">
                {result}
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
}
