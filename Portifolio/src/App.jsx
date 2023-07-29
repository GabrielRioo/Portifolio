import './App.css'
import Sidebar from './components/sidebar'
import Box from './components/box'

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <h1>Confira minhas habilidades em TI <br/> com meu portfólio de projetos</h1>
        <p>Por onde começar?</p>
        <div className="content_options"> 
          <Box />
          <Box />
          <Box />
        </div>

        <button className="contato">Quero entrar em contato!</button>
      </div>
    </div>
  )
}

export default App
