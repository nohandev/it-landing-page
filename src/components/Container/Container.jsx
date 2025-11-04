import Style from "./Container.module.css"

const Container = ({ title, children, className }) => {
    return (
        <section className={`${Style.defaultContainer} container_1440 geral ${className}`}>
            { title && <header><h1>{title}</h1></header> }
            { children }
        </section>
    );
}

export default Container;