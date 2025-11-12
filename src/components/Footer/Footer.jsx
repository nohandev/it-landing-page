import style from './Footer.module.css'
import {
  Youtube,
  Linkedin,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react'

const Footer = () => {
  return (
    <footer>
      <div className={style.footerContent}>

        <div className={style.footerNewsletter}>
          <div className={style.textForm}>
            <img src='/logo.png' alt='logo'/>
            <p>Subscribe to our newsletter for the latest updates on features and releases.</p>
          </div>
          <form>
            <input type='text' placeholder='Your email here'/>
            <button type='submit'>Join</button>
          </form>
          <span>
            By subscribing, you consent to our Privacy Policy and agree to receive updates.
          </span>
        </div>

        <div className={style.footerContentQuickLinks}>
          <div>
            <h1>Quick Links</h1>
          </div>

          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className={style.footerContentResources}>
          <div>
            <h1>Resources</h1>
          </div>

          <ul>
            <li>FAQs</li>
            <li>Support</li>
            <li>Testimonials</li>
            <li>Case Studies</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div className={style.footerContentConnectWithUs}>
          <div>
            <h1>ConnectWithUs</h1>
          </div>

          <ul>
            <li>
              <Facebook/>
              Facebook</li>
            <li>
              <Instagram/>
              Instagram
            </li>
            <li>
              <Twitter/>
              Twitter
            </li>
            <li>
              <Linkedin/>
              Linkdin
            </li>
            <li>
              <Youtube/>
              Youtube
            </li>
          </ul>
        </div>

      </div>
      <div className={style.credits}>
        <div className={style.creditsContent}>
          <div className={style.copyright}>
            &copy; 2024 Relume. All rights reserved.
          </div>
          <div className={style.terms}>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookie Settings</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
