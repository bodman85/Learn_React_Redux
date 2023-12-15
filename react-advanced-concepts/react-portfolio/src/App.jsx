import { Landing } from "./features/Landing";
import { Header } from "./features/Header";
import { Footer } from "./features/Footer";
import { Box } from "@chakra-ui/react";
import { LatestProjects } from "./features/LatestProjects";

export function App() {
  return (
    <>
      <Box p={5}>
        <Header />
        <Landing />
        <LatestProjects />
      </Box>
      <Footer />
    </>
  );
}
