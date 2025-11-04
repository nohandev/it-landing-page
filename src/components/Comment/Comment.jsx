import Style from "./Comment.module.css"

const Comment = () => {
    return (
        <div className={Style.commentContainer}>
            <div className={Style.commentTextContainer}>
                <p>Transforming ideas into the digital world. Meet Company Name Technologies. We're dedicated to empowering your vision through innovative technology solutions.</p>
            </div>
            <div className={Style.commentProfile}>
                <div className={Style.commentProfileImage}></div>
                <div className={Style.commentProfileInfos}>
                    <p>Irulan white</p>
                    <p>Glame, CEO</p>
                </div>
            </div>
        </div>
    );
};

export default Comment;