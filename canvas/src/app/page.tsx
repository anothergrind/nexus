import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NexusPicksCarousel from "./components/NexusPicksCarousel";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Box component="main" flex={1} px={{ xs: 2, md: 8 }} py={6}>
        <Typography variant="h2" align="center" gutterBottom>
          Welcome, {"{username}"}
        </Typography>
        <Box mt={6} mb={2}>
          <Typography variant="h4">NexusPicks</Typography>
          <Typography variant="subtitle1">Find books you might like</Typography>
        </Box>
        <NexusPicksCarousel />
      </Box>
    </Box>
  );
}
