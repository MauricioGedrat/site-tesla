import { Container, Header, Logo, Footer } from "./styles";

function UniqueOverlay() {
  return (
    <Container>
      <Header>
        <div style={{ cursor: "pointer" }}>
          <Logo />
        </div>
        <div style={{ cursor: "pointer" }}></div>
      </Header>
      {/* ////////////////////////////// */}

      <Footer>
        <ul>
          <li>
            <a href="#">UI Clone</a>
          </li>
          <li>
            <a href="#">Criado por SCALAR ERP</a>
          </li>
          <li>
            <a href="#">Maurício Gedrat</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
}

export default UniqueOverlay;
