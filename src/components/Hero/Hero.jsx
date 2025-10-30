import Button from '../Button/Button'
import styles from './Hero.module.css'
const Hero = () => {
  return (
    <section className={styles.hero}>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logoBlock}>
            <img src='/logo.png' alt='Logo image'/>
          </div>

          <nav className={styles.navigationBlock}>
            <ul className={styles.navMenu}>
              <li className={styles.navMenuItem}>Home</li>
              <li className={styles.navMenuItem}>About us</li>
              <li className={styles.navMenuItem}>Services</li>
              <li className={styles.navMenuItem}>Testimonials</li>
            </ul>
          </nav>

          <div className={styles.buttonBlock}>
            <Button variant={'white'}>Contact</Button>
          </div>
        </div>
      </header>

      <div className={styles.heroContent}>
        <h1>Empowering Your Business Through Innovative Technology</h1>
        <div className={styles.heroButtons}>
          <Button variant={'white'}>Contact Us</Button>
          <Button variant={'gray'}>About Us</Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
