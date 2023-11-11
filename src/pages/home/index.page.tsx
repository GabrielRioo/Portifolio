import { Container, BannerImageContainer, NavbarItem } from "./styles";
import NavbarPrincipal from '../../components/Navbar'
import Box from "@/components/Box";
import SmileImage from '../../assets/SmileImage.png'
import SeachImage from '../../assets/SeachImage.png'
import HeartImage from '../../assets/HeartImage.png'

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

          

          <section id="experiences">
            <h2>Experiences</h2>
            <nav>
              <ul>
                <li><a href="#company1">Company 1</a></li>
                <li><a href="#company2">Company 2</a></li>
              </ul>
            </nav>
            <div id="company1">
              <img src="caminho/para/logo_empresa1.jpg" alt="Logo da Empresa 1" />
              <h3>Company 1</h3>
              <p><strong>Anos na empresa:</strong> 3 anos</p>
              <p><strong>Descrição:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam risus eget tortor egestas, eget pellentesque urna malesuada. Sed bibendum hendrerit enim, in mattis nulla auctor eget.</p>
            </div>
            <div id="company2">
              <img src="caminho/para/logo_empresa2.jpg" alt="Logo da Empresa 2" />
              <h3>Company 2</h3>
              <p><strong>Anos na empresa:</strong> 2 anos</p>
              <p><strong>Descrição:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam risus eget tortor egestas, eget pellentesque urna malesuada. Sed bibendum hendrerit enim, in mattis nulla auctor eget.</p>
            </div>
          </section>

          

        </div>
      </main>
      <footer>
        <p>COPYRIGHT © GABRIEL DE PAIVA RIO - ALL RIGHTS RESERVED</p>
      </footer>
    </Container>
  )
}
