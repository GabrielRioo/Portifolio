import Box from "@/components/Box";
import { BannerImageContainer, Container, Content, Footer, NavbarItem } from "../home/styles";
import NavbarPrincipal from '../../components/Navbar'

export default function Contact() {
  return (
    <>
      <Container>
        <header>
          <BannerImageContainer />

          <NavbarPrincipal>
            <NavbarItem href="/">Home</NavbarItem>
            <NavbarItem href="/projects">Projects</NavbarItem>
            <NavbarItem href="/contact">Contact</NavbarItem>
          </NavbarPrincipal>
        </header>

        <main>
          
        </main>

        <Footer>
          <p>COPYRIGHT © GABRIEL DE PAIVA RIO - ALL RIGHTS RESERVED</p>
        </Footer>
      </Container>
    </>
  );
}
