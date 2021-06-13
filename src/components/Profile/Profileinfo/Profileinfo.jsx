import React from 'react';
import s from './Profileinfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from './../../../assect/user.png'

let Profileinfo = (props) => {

const changeImages = (e) => {
    if (e.target.files.length) {
        const file = e.target.files[0]
        props.savePhoto(file)
    }
}


    if (!props.profile) {
        return <Preloader />
    }
    else {
        return (
            <div className={s.myPosts}>
                <div className={s.images}></div>
                <div className={s.ava}>
                    <div>
                        <img src={props.profile.photos.large  || userPhoto} alt="" />
                        {props.isOwner && <input type='file' onChange={changeImages}  />}
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