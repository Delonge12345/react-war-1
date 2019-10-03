/**
 * Created by Максим on 19.06.2019.
 */
import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {logInThunk} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import classes from "./../common/FormsControls/FormsControls.module.css"






const maxLength10 = maxLengthCreator(10);
const minLength8 = minLengthCreator(8);

const LoginForm = (handleSubmit,error) => {
	return (

		<form onSubmit={handleSubmit}>
				{createField("Email","email",Input,[required])}
				{createField("Password","password",Input,[required],[required,minLength8],{type:"password"})}
				{createField(null,"rememberMe",Input,[],{type:"checkbox"},"Remember me")}

			{error && <div className={classes.formSummaryError}>
				{error}
			</div>
			}
			<div>
				<button>Login</button>
			</div>
		</form>

	)
}
const LoginReduxForm = reduxForm({
	// a unique name for the form
	form: 'login' // название нашей формы
})(LoginForm)

const Login = (props) => {

	const onSubmit =(formData)=>{ //в formData лежат все данные,пришедшие из формы
	props.logInThunk(formData.email,formData.password,formData.rememberMe)
	}
	if(props.isAuth){
		return <Redirect to={"/profile"}></Redirect>
	}



	return (
		<div><h1>LOGIN</h1>
			<LoginReduxForm onSubmit={onSubmit}/>
		</div>

	)
}

 const mapStateToProps=(state)=>({
 	isAuth: state.auth.isAuth
 })


export default connect(mapStateToProps,{logInThunk})(Login);