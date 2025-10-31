import Hero from './components/Hero/Hero.jsx'
import Container from './components/Container/Container.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'

const App = () => {
  return (
    <>
      <Hero/>
      <Container title="About Us">
        <AboutUs />
      </Container>
      <Container title="Global Voices">
        <img className="globalvoices_image" src="./world-map.png" />
      </Container>
    </>
  )
}

export default App
