import Container from "@mui/material/Container";

import NavWrapper from "./components/NavWrapper";
import Router from "./components/Router";
import Copyright from "./components/Copyright";

export default function App() {
  return (
    <Container maxWidth="lg" style={{ padding: 0 }}>
      <NavWrapper>
        <Router />
        <Copyright />
      </NavWrapper>
    </Container>
  );
}
