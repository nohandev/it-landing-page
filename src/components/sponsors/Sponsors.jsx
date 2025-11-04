import style from './Sponsors.module.css'

const data = [
  {id: 1, img: {src: '/sponsors/sponsor_1.png', alt: 'AltSponsorship'}},
  {id: 2, img: {src: '/sponsors/sponsor_2.png', alt: 'AltSponsorship'}},
  {id: 3, img: {src: '/sponsors/sponsor_3.png', alt: 'AltSponsorship'}},
  {id: 4, img: {src: '/sponsors/sponsor_4.png', alt: 'AltSponsorship'}},
  {id: 5, img: {src: '/sponsors/sponsor_5.png', alt: 'AltSponsorship'}},
]

const Sponsors = () => {
  return (
    <section className={style.sponsorSection}>
      <div className={style.sponsorContent}>
        <div className={style.sponsorTitle}>
          <h2> My Partner Worldwide</h2>    
        </div>

        <div className={style.sponsorWrapper}>
          {data.map(({id, img}) => (
            <img key={id} src={img.src} alt={img.alt}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sponsors
