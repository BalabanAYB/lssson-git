import React from 'react';
import s from './FormControls.module.css';

export const Textarea = ({input, meta, ...props}) => {
   const hasError = meta.touched && meta.error;
   return (
      <div>
         <div className={s.formControl + ' ' + (hasError ? s.error : '')}>

         <textarea {...input} {...props}/>
         {hasError && <span>{meta.error}</span>}
         </div>
      </div>
   )
} 

export const Input = ({input, meta, ...props}) => {
   const hasError = meta.touched && meta.error

   return <div>
      <div className={s.formControl + ' ' + (hasError ? s.error : '')} >
         <input type="text" {...input} {...props} />
         {hasError && <span>{meta.error}</span> }
      </div>
   </div>

}