import { Container, BannerImageContainer, NavbarItem } from "./styles";
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
          <NavbarItem href="/about">About</NavbarItem>
          <NavbarItem href="/projects">Project</NavbarItem>
        </NavbarPrincipal>
      </header>

      <main>
        <div>

          <Box iconSrc={SmileImage} title="About" />

          <Box iconSrc={SeachImage} title="Links" />

          <Box iconSrc={HeartImage} title="Skills" />

          <Box iconSrc={MoneyImage} title="Experiences" />

        </div>
      </main>
      <footer>
        <p>COPYRIGHT © GABRIEL DE PAIVA RIO - ALL RIGHTS RESERVED</p>
      </footer>
    </Container>
  )
}
