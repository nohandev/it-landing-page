import Style from "./Container.module.css"

const Container = ({ title, children }) => {
    return (
        <section className={Style.defaultContainer}>
            <div className={`${Style.containerContent} container_1440`}>
                <header>
                    <h1>{title}</h1>
                </header>
                { children }
            </div>
        </section>
    );
}

export default Container;