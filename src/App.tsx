import { Contato } from "./components/sections/Contato"
import { Footer } from "./components/sections/Footer"
import { Header } from "./components/sections/Header"
import { Hero } from "./components/sections/Hero"
import { Projetos } from "./components/sections/Projetos"
import { Sobre } from "./components/sections/Sobre"

import { ThemeProvider } from "./context/ThemeContext"

function App() {

  return (
    <div>
      <ThemeProvider>
        <Header/>
        <Hero/>
        <Sobre/>
        <Projetos/>
        <Contato/>
        <Footer/>
      </ThemeProvider>
    </div>
  )
}

export default App
