import Style from './Blog.module.css'
import Card from '../Card/Card.jsx'

const Blog = () => {
    return (
        <div className={Style.blogContainer}>
            <div>
                <Card />
            </div>
            <div className={Style.blogSubContent}>
                <div className="cardImage">
                    <div className={Style.blogSubContentBg}>
                        <p className={Style.blogSubContentTitle}>AR and VR technology is rapidly growing...</p>
                    </div>
                </div>
                <div className="cardImage">
                    <div className={Style.blogSubContentBg}>
                        <p className={Style.blogSubContentTitle}>Why 3D Elements are important in your project...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;