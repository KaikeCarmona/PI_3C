import { HeaderContainer, Logo, Nav, NavLink } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>Minha App</Logo>
      <Nav>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">Sobre</NavLink>
        <NavLink href="#services">Serviços</NavLink>
        <NavLink href="#contact">Contato</NavLink>
      </Nav>
      <div>Redes sociais</div>
    </HeaderContainer>
  );
}
