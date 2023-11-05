import { Container } from "./styles";
import Box from '../../components/Box'

export default function Home() {
  return (
    <Container>
      <header>
        <div>
          <img src="" alt="" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/projects">Project</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div>
        <section id="about">
            <h2>About</h2>
            <div>
                <img src="caminho/para/sua/imagem.jpg" alt="Foto de Gabriel de Paiva Rio" />
            </div>
            <div>
                <p><strong>Nome:</strong> Gabriel de Paiva Rio</p>
                <p><strong>Cargo:</strong> Fullstack Developer</p>
                <p><strong>Anos de carreira:</strong> 4 anos</p>
                <p><strong>Sobre:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam risus eget tortor egestas, eget pellentesque urna malesuada. Sed bibendum hendrerit enim, in mattis nulla auctor eget.</p>
            </div>
        </section>

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
