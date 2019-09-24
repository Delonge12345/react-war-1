import React, {Component} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusThunk, getUsersProfileThunk, setUserProfile, updateStatusThunk} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileAPIComponent extends React.Component  {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId){
			userId = this.props.authorizedUserId;
		}
		this.props.getUsersProfileThunk(userId)
		this.props.getStatusThunk(userId);
	}
	render(){

		return (
			<Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatusThunk={this.props.updateStatusThunk}/>
		)
	}

}



let mapStateToProps = (state)=>({
	profile:state.profilePage.profile,
	status: state.profilePage.status,
	authorizedUserId:state.auth.userId,
	isAuth: state.auth.isAuth
});



//Обернули в compose

// let authRedirectComponent=withAuthRedirect(ProfileAPIComponent);
// let WithUrlDataContainerComponent = withRouter(authRedirectComponent)
// const profileContainer = connect (mapStateToProps,{
// 	getUsersProfileThunk }) (WithUrlDataContainerComponent)
// export default profileContainer;


export default compose(

	connect (mapStateToProps,{getUsersProfileThunk,getStatusThunk,updateStatusThunk}),
	withRouter,

)(ProfileAPIComponent)



