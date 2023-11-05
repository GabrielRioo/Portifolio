import { Container, BannerImageContainer } from "./styles";
import NavbarPrincipal from '../../components/Navbar'
import Box from "@/components/Box";
import SmileImage from '../../assets/SmileImage.png'
import SeachImage from '../../assets/SeachImage.png'

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
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Project</a>
        </NavbarPrincipal>
      </header>

      <main>
        <div>

          <Box iconSrc={SmileImage} title="About" />

          <Box iconSrc={SeachImage} title="Links" />
          

          <section id="skills">
            <h2>Skills</h2>
            <div>
              <div id="frontend">
                <img src="caminho/para/sua/imagem.jpg" alt="Foto de Gabriel de Paiva Rio" />
              </div>
              <div id="backend">
                <img src="caminho/para/sua/imagem.jpg" alt="Foto de Gabriel de Paiva Rio" />
              </div>
              <div id="devops">
                <img src="caminho/para/sua/imagem.jpg" alt="Foto de Gabriel de Paiva Rio" />
              </div>
            </div>

            <nav>
              <ul>
                <li><a href="#frontend">Frontend</a></li>
                <li><a href="#backend">Backend</a></li>
                <li><a href="#devops">DevOps</a></li>
              </ul>
            </nav>
          </section>

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

          <section id="links">
            <h2>Links</h2>
            <ul>
              <li><a href="https://www.linkedin.com/in/seu-nome" target="_blank" rel="noopener">LinkedIn</a></li>
              <li><a href="https://github.com/seu-usuario" target="_blank" rel="noopener">GitHub</a></li>
            </ul>
          </section>

        </div>
      </main>
      <footer>
        <p>COPYRIGHT © GABRIEL DE PAIVA RIO - ALL RIGHTS RESERVED</p>
      </footer>
    </Container>
  )
}
