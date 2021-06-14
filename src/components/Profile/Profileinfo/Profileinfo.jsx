import React, {useState} from 'react';
import s from './Profileinfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileData from "./ProfileData"
import userPhoto from './../../../assect/user.png'
import ProfileFormData from './ProfileFormData';


let Profileinfo = (props) => {

let [editMode, setEditMode]  = useState(false);

const changeImages = (e) => {
    if (e.target.files.length) {
        const file = e.target.files[0]
        props.savePhoto(file)
    }
}

const onSetForm = (form) => {
    let formData = {
        fullName: form.fullName,
        aboutMe: form.aboutMe,
        lookingForAJob: form.lookingForAJob,
        lookingForAJobDescription: form.lookingForAJobDescription,
        contacts: {
            github: form.github,
            vk: form.vk,
            facebook: form.facebook,
            instagram: form.instagram,
            twitter: form.twitter,
            website: form.website,
            youtube: form.youtube,
            mainLink:form.mainLink
        }
    }
    console.log(form)
    props.setFormData(form)
    setEditMode(false)
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
                    <div className={s.name}>{props.profile.fullName}</div>
                    <ProfileStatus status={props.status} updateStatusThunk={props.updateStatusThunk} className={s.aboutMe} />
                        {!editMode
                        ?<div>
                            <ProfileData onEditMode={() => {setEditMode(true)}}  profile={props.profile} />
                        </div>
                        :<ProfileFormData profile={props.profile}  initialValues={props.profile} onSubmit={onSetForm} />
                        }
                </div>
            </div>
        );
    }
}

export default Profileinfo;