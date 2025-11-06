import style from './Contact.module.css'

const Contact = () => {
  return (
    <section className={style.contactSection}>
      <div className={style.contactContent}>
        <div className={style.contactImage}>
          <img src='/contact.png'/>
        </div>

        <div className={style.contactForm}>
          <div className={style.formTitle}>
            <h1>Let's Collaborate Now!</h1>
          </div>

          <div className={style.formField}>
            <label htmlFor='name'>FullName</label>
            <input type='text' placeholder='Input Your Name' id='name' name='name' autoComplete='additional-name webauthn'/>
          </div>

          <div className={style.emailAndDateContainer}>
            <div className={`${style.formField} ${style.email}`}>
              <label htmlFor='email'>Email</label>
              <input type='email' placeholder='Input Your Email' id='email' name='email' autoComplete='additional-name webauthn'/>
            </div>
            <div className={`${style.formField} ${style.date}`}>
              <label htmlFor='date'>Date</label>
              <input type='date' placeholder='Select date' id='date' name='date'/>
            </div>
          </div>

          <div className={style.formField}>
            <label htmlFor='message'>Message</label>
            <textarea rows='7' placeholder='Enter Your Message Here...' id='message' name='message'></textarea>
          </div>

          <div>
            <button type='submit' className={style.formBtn}>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
