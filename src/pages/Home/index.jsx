import Header from "../../components/Header";
import { Container, Footer, Section } from "./styles";

function Home() {
  return (
    <Container>
      <Header />
      <Section>1</Section>
      <Section>2</Section>
      <Section>3</Section>
      <Footer>Footer</Footer>
    </Container>
  );
}

export default Home;
