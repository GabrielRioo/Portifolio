import { Container, BannerImageContainer, NavbarItem, Content, Footer } from "./styles";
import NavbarPrincipal from '../../components/Navbar'
import Box from "@/components/Box";
import SmileImage from '../../assets/SmileImage.png'
import SeachImage from '../../assets/SeachImage.png'
import HeartImage from '../../assets/HeartImage.png'
import MoneyImage from '../../assets/MoneyImage.png'

export default function Home() {
  const Navbar = [
    { title: "Home", color: "red" },
    { title: "About", color: "green" },
    { title: "Projects", color: "blue" },
  ];

  return (
    <Container>
      <header>
        <BannerImageContainer />

        <NavbarPrincipal>
          <NavbarItem href="/">Home</NavbarItem>
          <NavbarItem href="/about">Projects</NavbarItem>
          <NavbarItem href="/projects">Contact</NavbarItem>
        </NavbarPrincipal>
      </header>

      <main>
        <Content>

          <div style={{ flex: 1 }}>
            <Box iconSrc={SmileImage} title="About" />
            <Box iconSrc={SeachImage} title="Links" />
          </div>

          <div style={{ flex: 1 }}>
            <Box iconSrc={HeartImage} title="Skills" />
            <Box iconSrc={MoneyImage} title="Experiences" />
          </div>

        </Content>
      </main>

      <Footer>
        <p>COPYRIGHT © GABRIEL DE PAIVA RIO - ALL RIGHTS RESERVED</p>
      </Footer>
    </Container>
  )
}
