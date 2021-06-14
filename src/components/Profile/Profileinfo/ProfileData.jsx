import React from 'react';
import s from './Profileinfo.module.css';


const ProfileData = ({ profile, onEditMode }) => {
   const Contact = ({ contactTitle, contactValue }) => {
      return <div> <b>{contactTitle}:</b>{contactValue}</div>
   }

   return <div className={s.info}>
      <button onClick={onEditMode}>Edit</button>
      <span> <b>Ищу работу:</b> {profile.lookingForAJob ? 'да' : 'нет'}</span>
      {profile.lookingForAJob
         ? <div> <b>Я ищу:</b> "{profile.lookingForAJobDescription}"</div>
         : null
      }
      <div><b>Обо мне:</b> {profile.aboutMe} </div>
      <b>Контакты:</b> {Object.keys(profile.contacts).map(key => {
         return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
      })}
   </div>
}

export default ProfileData;