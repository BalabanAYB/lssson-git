import s from './Profileinfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

let Profileinfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    else {
        return (
            <div className={s.myPosts}>
                <div className={s.images}></div>
                <div className={s.ava}>
                    <div>
                        <img src={props.profile.photos.large} alt="" />
                    </div>
                    <div className={s.info}>
                        <span className={s.name}>{props.profile.fullName}</span>
                        <ProfileStatus status={props.status} updateStatusThunk={props.updateStatusThunk} className={s.aboutMe} />
                        {props.profile.lookingForAJob ? <span>Ищу работу</span> : <span>Не ищу работу</span>}
                        <div>
                            Что конкретно ищу: "{props.profile.lookingForAJobDescription}"
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profileinfo;