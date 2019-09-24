/**
 * Created by Максим on 21.06.2019.
 */
import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


export const withAuthRedirect = (Component)=>{
	class RedirectComponent extends React.Component{
		render(){
			if(!this.props.isAuth) return <Redirect to={"/login"}/>;
			return <Component {...this.props}/>

		}
	}

	let mapStateToForPropsRedirect = (state)=>({
		isAuth:state.auth.isAuth
	});
	let ConnectedAuthRedirectComponent= connect(mapStateToForPropsRedirect)(RedirectComponent)


	return ConnectedAuthRedirectComponent;
}