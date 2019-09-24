/**
 * Created by Максим on 19.03.2019.
 */
import {profileAPI, usersAPI} from "../API/api";
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS='SET_STATUS';

let initialState = {
	postsData: [
		{id: 1, message: 'Hi, how are you?', amount: '10'},
		{id: 2, message: 'It\'s my first post!', amount: '12'},
	],
	profile: null,
	status: ""
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				message: action.onNewMyPostText,
				amount: '15',
			};
			return  {...state,postsData : [...state.postsData,newPost]};

		}

		case SET_USER_PROFILE : {
			return {...state, profile: action.profile};
		}

		case SET_STATUS: {
			return {...state, status: action.status};
		}

		default:
			return state;
	}
}




export const addPostActionCreator = (onNewMyPostText) => {
	return {
		type: ADD_POST,
		onNewMyPostText
	}
}

export const setUserProfile=(profile)=>({type:SET_USER_PROFILE,profile})

export const setStatus=(status)=>({type:SET_STATUS,status})

export const getUsersProfileThunk= (userId)=> {
	return async (dispatch) => {
		let response = await usersAPI.getProfile(userId)
			dispatch(setUserProfile(response.data));

	}

}


export const getStatusThunk= (userId)=> {
	return async (dispatch) => {
		let response = await profileAPI.getUsersStatus(userId)

				dispatch(setStatus(response.data));

	}

}


export const updateStatusThunk= (status)=> {
	return async (dispatch) => {
		let response = await profileAPI.updateStatus(status)
			if(response.data.resultCode===0) {
				dispatch(setStatus(status));
			}

	}

}





export default profileReducer;

