import style from './Services.module.css'
import { ArrowUpRight } from 'lucide-react'

const data = [
  {id: 1, title: 'Sofwtare Development', variant:'dark'},
  {id: 2, title: 'Mobile App Development', description: "Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. ", variant:'light', img: {src: '/services/banner.png', alt: 'altImgage'}},
  {id: 3, title: 'Web Development', variant:'dark'},
  {id: 4, title: 'Digital Marketing', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. ", variant:'light', img: {src: '/services/banner.png', alt: 'altImgage'}},
  {id: 5, title: 'Database Development', variant:'dark'},
  {id: 6, title: 'Cyber Security', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. ", variant:'light', img: {src: '/services/banner.png', alt: 'altImgage'}},
]

const Card = ({variant, title, description, img}) => {
  if (variant === 'dark') {
    return (
      <div className={style.cardDark}>
        <div className={style.cardContentDark}>
          <div className={style.cardTitleDark}>
            <h2>{title}</h2>
          </div>
          <div className={style.cardLinkDark}>
            <ArrowUpRight size={30}/>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'light') {
    return (
      <div className={style.cardLight}>
      <div className={style.cardContentLight}>
        <div className={style.cardTitleLight}>
          <h2>{title}</h2>
        </div>

          <div className={style.cardDescriptionLight}>
            <p>{description}</p>
          </div>

        <div className={style.cardLinkLight}>
          <ArrowUpRight size={30}/>
        </div>
      </div>

      <div className={style.cardkLightImg}>
        <img src={img.src} alt={img.alt}/>
      </div>
    </div>
    )
  }
}

const Services = () => {
  return (
    <section className={style.sectionServices}>
      <div className={style.contentServices}>
        <div>
          <h1 className={style.titleServices}>Services</h1>
        </div>

        <div className={style.cardWrapper}>
          {data.map(data => (
            <Card
              key={data.id}
              title={data.title}
              variant={data.variant}
              description={data.description}
              img={data.img}
              alt={data.img}/>
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default Services
