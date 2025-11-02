import Style from './Card.module.css'
import Button from '../Button/Button.jsx'

const Card = () => {
    return (
        <section className={Style.cardContainer}>
            <div className="cardImage"></div>
            <div>
                <p className={Style.cardTitle}>Top 5 New Tech Trend  is change the world....</p>
                <p className={Style.cardContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s .....</p>
                <Button variant={"cardButton"}>Read more</Button>
            </div>
        </section>
    );
};

export default Card;