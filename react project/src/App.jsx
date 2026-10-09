import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import About from './Components/About.jsx'
import Services from './Components/Services.jsx'
import Testi from './Components/Testi.jsx'
import Footer from './Components/Footer.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testi />
      </main>
      <Footer />
    </>
  )
}

export default App
