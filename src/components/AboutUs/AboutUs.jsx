import Showcase from '../Showcase/Showcase';
import Style from './AboutUs.module.css';

const AboutUs = () => {
    const data = [
        { title: "Clients", value: 37 },
        { title: "Years Experience", value: 5 },
        { title: "Projects", value: 88 },
        { title: "Awards", value: 2 },
    ];

    return (
        <div className={Style.aboutUsContainer}>
            <div className={Style.aboutUsTextContainer}>
                <p>Transforming ideas into the digital world. Meet company name Technologies. We're dedicated to empowering your vision through innovative technology solutions We partner with you to bring your ideas to life in the digital landscape.</p>
            </div>
            <div className={Style.aboutUsShowcaseContainer}>
                { data.map((showcase, index) => {
                    return <Showcase key={index} title={showcase.title} value={showcase.value} />
                })}
            </div>
        </div>
    );
}

export default AboutUs;