import React from 'react';
import {connect} from 'react-redux';
import {
	followThunk, unfollowThunk, setCurrentPage, toggleIsDisable, getUsersThunkCreator
} from '../../redux/usersReducer';

import Users from './Users';
import Preloader from "../common/preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
	getCurrentPage, getFollowDisable, getIsFetching, getPageSize, getTotalUsersCount,
	getUsers
} from "../../redux/users.selectors";





class UsersAPIComponent extends React.Component {
	componentDidMount() {
		this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {
		this.props.getUsersThunkCreator(pageNumber,this.props.pageSize);

	}




	render() {
		return <>
			{this.props.isFetching ? <Preloader/> : null}
			<Users totalUsersCount={this.props.totalUsersCount}
					 pageSize={this.props.pageSize}
					 currentPage={this.props.currentPage}
					 onPageChanged={this.onPageChanged}
					 users={this.props.users}
					 followThunk={this.props.followThunk}
					 unfollowThunk={this.props.unfollowThunk}
						 toggleIsDisable={this.props.toggleIsDisable}
						 followDisable={this.props.followDisable}

		/>
		</>
	}
}



// let mapStateToProps = (state) => {
// 	return {
// 		users: state.usersPage.users,
// 		pageSize: state.usersPage.pageSize,
// 		totalUsersCount: state.usersPage.totalUsersCount,
// 		currentPage: state.usersPage.currentPage,
// 		isFetching:state.usersPage.isFetching,
// 		followDisable:state.usersPage.followDisable
// 	}
// }

let mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching:getIsFetching(state),
		followDisable:getFollowDisable(state)
	}
}









// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		follow: (userId) => {
// 			dispatch(followAC(userId))
// 		},
// 		unfollow: (userId) => {
// 			dispatch(unfollowAC(userId))
// 		},
// 		setUsers: (users) => {
// 			dispatch(setUsersAC(users))
// 		},
// 		setCurrentPage: (pageNumber) => {
// 			dispatch(setCurrentPageAC(pageNumber))
// 		},
// 		setTotalUsersCount: (totalCount) => {
// 			dispatch(setUsersTotalCountAC(totalCount))
// 		},
// 		toggleIsFetching:(isFetching)=>{
// 			dispatch(toggleIsFetchingAC(isFetching))
// 		}
// 	}
// }







//Обернули в compose

// let authRedirectComponent= withAuthRedirect(UsersAPIComponent);
// const UsersContainer = connect(mapStateToProps, {
// 	followThunk ,
// 	unfollowThunk ,
// 	setCurrentPage,
// 	toggleIsDisable,
// 	getUsersThunkCreator
//
// })(authRedirectComponent);
// export default UsersContainer;


export default compose(
	connect(mapStateToProps, {
		followThunk ,
		unfollowThunk ,
		setCurrentPage,
		toggleIsDisable,
		getUsersThunkCreator

	}),
	withAuthRedirect
)(UsersAPIComponent)






