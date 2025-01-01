import Container from "@mui/material/Container";

import NavHeader from "./components/NavHeader";
import Router from "./components/Router";
import Copyright from "./components/Copyright";
import Toolbar from "@mui/material/Toolbar";

export default function App() {
  return (
    <Container maxWidth="lg" style={{ padding: 0 }}>
      <NavHeader />
      <Toolbar />
      <Router />
      <Copyright />
    </Container>
  );
}
