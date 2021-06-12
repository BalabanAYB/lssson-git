import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { Textarea } from '../../../utils/FormControls/FormControls';
import { maxLengthCreator, required } from '../../../utils/validator/validator';

const maxLength10 = maxLengthCreator(10)

const Form = (props) => {

   return <form onSubmit={props.handleSubmit}>
      <Field name="post" component={Textarea} placeholder="Введите ваш пост" 
      validate={[required, maxLength10]}/>
      <button>Отправить на стену</button>
   </form>
}

const MyPostForm = reduxForm({form:'newPost'})(Form)

export default MyPostForm;
