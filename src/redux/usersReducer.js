/**
 * Created by Максим on 19.03.2019.
 */
import {usersAPI} from "../API/api";
import {updateObjectInArray} from "../utils/validators/object-helpers";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_DISABLE = 'TOGGLE_IS_DISABLE';
let initialState = {
	users: [],
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followDisable: []
};
const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users,action.userId,"id",{followed:true})
			}

		case UNFOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users,action.userId,"id",{followed:false})

			}

		case SET_USERS: {
			return {...state, users: action.users}
		}
		case SET_CURRENT_PAGE: {
			return {...state, currentPage: action.currentPage}
		}
		case SET_USERS_TOTAL_COUNT: {
			return {...state, totalUsersCount: action.count}
		}
		case TOGGLE_IS_FETCHING: {
			return {...state, isFetching: action.isFetching}
		}
		case TOGGLE_IS_DISABLE: {
			return {
				...state,
				followDisable: action.isFetching
					? [...state.followDisable, action.userId]
					: state.followDisable.filter(id => id != action.userId)
			}
		}
		default:
			return state;
	}
}
export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_USERS_TOTAL_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsDisable = (isFetching, userId) => ({type: TOGGLE_IS_DISABLE, isFetching, userId})
export const getUsersThunkCreator = (currentPage, pageSize) => {
	return async (dispatch) => {
		dispatch(toggleIsFetching(true));
		let data = await usersAPI.getUsers(currentPage, pageSize)
		dispatch(toggleIsFetching(false));
		dispatch(setUsers(data.items));
		dispatch(setTotalUsersCount(data.totalCount));
		dispatch(setCurrentPage(currentPage))
	}
}




const followUnfollowThunk =  async (dispatch,userId,apiMethod,actionCreator) => {
	dispatch(toggleIsDisable(true, userId));
	let response = await apiMethod(userId)

	if (response.data.resultCode == 0) {
		dispatch(actionCreator(userId));
	}
	dispatch(toggleIsDisable(false, userId));
	}



export const followThunk = (userId) => {
	return async (dispatch) => {
		let apiMethod = usersAPI.unfollow.bind(userId);
		let actionCreator = unfollowSuccess;

		followUnfollowThunk(dispatch,userId,apiMethod,actionCreator);

	}
}


export const unfollowThunk = (userId) => {
	return async (dispatch) => {
		let apiMethod = usersAPI.follow.bind(userId);
		let actionCreator = followSuccess;

		followUnfollowThunk(dispatch,userId,apiMethod,actionCreator);

	}
}




export default usersReducer;