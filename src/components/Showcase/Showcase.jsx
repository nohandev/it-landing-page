import Style from './Showcase.module.css'

const Showcase = ({ title, value }) => {
    return (
        <div className={Style.defaultShowcase}>
            <p className={Style.showcaseTitle}>{ title }</p>
            <p className={Style.showcaseValues}>{ value } +</p>
        </div>
    );
}

export default Showcase;