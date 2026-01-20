import { Button, Container, Grid, styled, Typography } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import EmailIcon from "@mui/icons-material/Email";
import Avatar from "../../../../assets/images/avatar.png";

const StyledHero = styled("section")(() => ({
  backgroundColor: "black",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
}));

const StyledImg = styled("img")(() => ({
  width: "100%",
  maxWidth: 280,
  borderRadius: "50%",
  display: "block",
  margin: "0 auto",
}));

const Hero = () => {
  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          
          <Grid size={{ xs: 12, md: 4 }}>
            <StyledImg src={Avatar} alt="Avatar Matheus Fumero" />
          </Grid>

          <Grid size={{ xs: 12, md: 8 }} sx={{ textAlign: "center" }}>
            <Typography color="primary" variant="h1">
              Matheus Fumero
            </Typography>

            <Typography color="primary" variant="h2" gutterBottom>
              I'm a Software Engineer
            </Typography>

            <Grid container display={"flex"} justifyContent="center" sx={{ mt: 4 }}>
                <Grid size={{ xs: 12, md:4 }} display={"flex"} justifyContent={"center"}>
                    <Button startIcon={<FileDownloadIcon />} sx={{ mr: 2 }}>
                        Download CV
                    </Button>
                </Grid>
                 <Grid size={{ xs: 12, md:4 }} display={"flex"} justifyContent={"center"}>
                    <Button startIcon={<EmailIcon />}>
                        Contact me
                    </Button>
                </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
