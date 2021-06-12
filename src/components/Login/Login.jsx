import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginAuthMeThunk} from "../../Redux/authReducer";
import { Input } from "../../utils/FormControls/FormControls";
import s from "../../utils/FormControls/FormControls.module.css"
import { required } from "../../utils/validator/validator";
import { Redirect } from "react-router";

const LoginForm = (props) => {
   return (
    <form onSubmit={props.handleSubmit}>
<div>
   <Field name={'email'} placeholder={'name'} component={Input}
   validate={[required]} />
</div>

<div>
   <Field name={'password'} placeholder={'password'} component={Input}
   validate={[required]} />
</div>

<div>
   <Field name={'rememberMe'} component={'input'} type={'checkbox'} /> remember me
</div>
<div>
   {props.error && <div className={s.someError}>{props.error}</div>}

   <button>Login</button>
</div>
   </form>
   )
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)

const Login = (props) => {

   const onSubmit = (formData) => {
      props.loginAuthMeThunk(formData.email,formData.password, formData.rememberMe)
   }

   if(props.isAuth){
     return <Redirect to={'/profile'} />
   }
   else {
return <div>
   <h1>Login</h1>
<LoginReduxForm onSubmit={onSubmit} />
</div>
}
}

let mapStateToProps = (state) => {
    return {
       isAuth: state.auth.isAuth
      }
}


export default connect(mapStateToProps, {loginAuthMeThunk}) (Login);