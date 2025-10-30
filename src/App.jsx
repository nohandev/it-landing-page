import Hero from './components/Hero/Hero.jsx'
import Container from './components/Container/Container.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'

const App = () => {
  return (
    <div>
      <Hero/>
      <Container title="About Us">
        <AboutUs />
      </Container>
    </div>
  )
}

export default App
