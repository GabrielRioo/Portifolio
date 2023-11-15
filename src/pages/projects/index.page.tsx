import { BannerImageContainer, Container, Content, Footer, NavbarItem } from "./styles";
import NavbarPrincipal from '../../components/Navbar'
import Box from "@/components/Box";
import SmileImage from '../../assets/SmileImage.png'
import PokebolaIcon from '../../assets/PokebolaIcon.png'
import RelogioIcon from '../../assets/RelogioIcon.png'
import OrkutIcon from '../../assets/OrkutIcon.png'
import NetflixIcon from '../../assets/NetflixIcon.png'
import TaskIcon from '../../assets/TaskIcon.png'
import IaIcon from '../../assets/IaIcon.png'
import PokedexScreen from '../../assets/PokedexScreen.png'
import PomodoroScreen from '../../assets/PomodoroScreen.png'
import GabflixScreen from '../../assets/GabflixScreen.png'
import TaskBuilderScreen from '../../assets/TaskBuilderScreen.png'
import UploadaiScreen from '../../assets/UploadaiScreen.png'
import AlurakutScreen from '../../assets/AlurakutScreen.png'

export default function Projects() {
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
          <NavbarItem href="/projects">Projects</NavbarItem>
          <NavbarItem href="/contact">Contact</NavbarItem>
        </NavbarPrincipal>
      </header>

      <main>
        <Content>
          <div style={{ flex: 1 }}>
            <Box 
              iconSrc={PokebolaIcon} 
              session="Project" 
              title="Pokedex" 
              imageProject={PokedexScreen} 
              descriptionProject="Embark on a Pokémon journey with our Pokédex application! Built with React and styled using styled components, this platform lets you explore and discover all Pokémon, showcasing their attributes. An interactive experience for fans of pocket monsters."  
            />

            <Box 
              iconSrc={TaskIcon} 
              session="Project" 
              title="Taskbuilder" 
              imageProject={TaskBuilderScreen} 
              descriptionProject="Stay organized and productive with our To-Do List application! Built with React, TypeScript, and styled components, this project allows you to effortlessly add tasks, check off completed items, and maintain a streamlined workflow. Simplify your daily tasks with a user-friendly and visually appealing interface."  
            />
          </div>

          <div style={{ flex: 1 }}>
            <Box 
              iconSrc={RelogioIcon} 
              session="Project" 
              title="Pomodoro" 
              imageProject={PomodoroScreen}
              descriptionProject="Elevate your productivity with our Pomodoro application! Developed using React, Vite, Context API, and Redux, it features a sleek timer for focused work sessions and maintains a usage history. Achieve your tasks efficiently while tracking your progress seamlessly."  
            />

            <Box 
              iconSrc={IaIcon} 
              session="Project" 
              title="Upload.AI"
              imageProject={UploadaiScreen}
              descriptionProject="Revolutionize content creation with our project leveraging OpenAI! Using React, TypeScript, and styled components, our application generates compelling titles and descriptions for videos upon upload. Unleash the power of AI to streamline the creative process and enhance your video content effortlessly."  
            />
          </div>

          <div style={{ flex: 1 }}>
            <Box 
              iconSrc={NetflixIcon} 
              session="Project" 
              title="Gabflix" 
              imageProject={GabflixScreen}
              descriptionProject="Dive into a cinematic experience with our Netflix Clone SPA! Crafted with React, TypeScript, and styled components, this project showcases a curated selection of videos for your viewing pleasure. Immerse yourself in seamless entertainment with a modern touch."  
            />

            <Box 
              iconSrc={OrkutIcon} 
              session="Project" 
              title="Alurakut" 
              imageProject={AlurakutScreen}
              descriptionProject="Relive the nostalgia of the past with our Orkut interface clone project! Developed using React and styled with styled components, this recreation brings back the essence of the favorite social network from the 2000s, providing an authentic experience with a modern touch."  
            />
          </div>

        </Content>
      </main>

      <Footer>
        <p>COPYRIGHT © GABRIEL DE PAIVA RIO - ALL RIGHTS RESERVED</p>
      </Footer>
    </Container>
  )
}
