import React from 'react';
import { Field, reduxForm } from 'redux-form';

let ProfileFormData = (props) => {
   return <form onSubmit={props.handleSubmit} >
      <button>Save</button>
      <div>
         <Field name='fullName' placeholder='fullName' component={'textarea'} />
      </div>
      <div>
         <Field name='aboutMe' placeholder='aboutMe' component={'textarea'} />
      </div>
      <div>
         <span>Ищу ли я работу:</span>
         <Field type="checkbox" name='lookingForAJob' component={'input'} />
      </div>
      <div>
         <Field placeholder={'Чего я ищу'} name='lookingForAJobDescription' component={'input'} />
      </div>
      {Object.keys(props.profile.contacts).map(key => {
        return <div key={key}> <b>{key} :</b> <Field name={`contacts.${key}`} placeholder={`${key}`}  component={'input'} />  </div>
      })}
   </form>
}

{
/*
 return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />

 <div>
         <Field name={'facebook'} placeholder='facebook' component={'input'} />
      </div>
      <div>
         <Field name={'website'} placeholder='website' component={'input'} />
      </div>
      <div>
         <Field name={'vk'} placeholder='vk' component={'input'} />
      </div>
      <div>
         <Field name={'twitter'} placeholder='twitter' component={'input'} />
      </div>
      <div>
         <Field name={'instagram'} placeholder='instagram' component={'input'} />
      </div>
      <div>
         <Field name={'youtube'} placeholder='youtube' component={'input'} />
      </div>
      <div>
         <Field name={'github'} placeholder='github' component={'input'} />
      </div>
      <div>
         <Field name={'mainLink'} placeholder='mainLink' component={'input'} />
      </div>
*/
}

export default reduxForm({form: 'contacts'})(ProfileFormData)

