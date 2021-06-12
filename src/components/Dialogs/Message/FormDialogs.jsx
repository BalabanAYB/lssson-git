import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../../utils/FormControls/FormControls';
import { maxLengthCreator, required } from '../../../utils/validator/validator';

let maxLength300 = maxLengthCreator(300)

const Form =  (props) => {
   return <form onSubmit={props.handleSubmit} >
      <div>
<Field name={'message'} component={Textarea} validate={[required, maxLength300]} />
      </div>
      <div>
         <button>Отправить сообщение</button>
      </div>
   </form>
}

const FormReduxDialogs = reduxForm({form: "dialogs"})(Form)

const FormDialogs = (props) => {

   
   const onSubmit = (formData) => {
      console.log(formData)
    props.addMessage(formData.message)  
   }

   return <FormReduxDialogs onSubmit={onSubmit} />
}

export default FormDialogs;