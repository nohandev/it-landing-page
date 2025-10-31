import Style from "./Container.module.css"

const Container = ({ title, children }) => {
    return (
        <section className={`${Style.defaultContainer} container_1440 geral`}>
            <header>
                <h1>{title}</h1>
            </header>
            { children }
        </section>
    );
}

export default Container;