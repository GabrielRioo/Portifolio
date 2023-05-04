import './App.css'
import Sidebar from './components/sidebar'
import Box from './components/box'

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <h1>Headline aqui</h1>

        <div className="content_options"> 
          <Box />
          <Box />
          <Box />
        </div>

        <button className="contato">clique aqui</button>
      </div>
    </div>
  )
}

export default App
