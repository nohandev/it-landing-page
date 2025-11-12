import Hero from './components/Hero/Hero.jsx'
import Container from './components/Container/Container.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Blog from './components/Blog/Blog.jsx'
import Button from './components/Button/Button.jsx'
import Comment from './components/Comment/Comment.jsx'
import Services from './components/Services/Services.jsx'
import Sponsors from './components/sponsors/Sponsors.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'

const App = () => {
  return (
    <>
      <Hero/>
      <Container title="About Us">
        <AboutUs />
      </Container>

      <Services/>

      <Sponsors/>

      <Container className="preContactContainer">
        <p className="preContactText">Have a technology challenge?</p>
        <p className="preContactText">We have the solution.</p>
        <Button variant={"gray"}>Contact Us</Button>
      </Container>

      <Container title="Global Voices">
        <Comment />
        <img className="globalvoices_image" src="./world-map.png" />
      </Container>
      
      <Container title="Blog">
        <Blog />
      </Container>

      <Contact/>

      <Footer/>
    </>
  )
}

export default App
