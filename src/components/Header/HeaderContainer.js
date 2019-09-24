/**
 * Created by Максим on 04.06.2019.
 */
import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";




class HeaderContainer extends React.Component{

	render(){
		return <Header{...this.props}></Header>
	}
}
const mapStateToProps = (state)=>({
	isAuth:state.auth.isAuth,
	login:state.auth.login
});


//
// export default connect(mapStateToProps,{getUsersAuthThunk}) (HeaderContainer);


export default compose(
	withRouter,
	connect(mapStateToProps))
(HeaderContainer);