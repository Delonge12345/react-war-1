/**
 * Created by Максим on 04.06.2019.
 */
import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";
/**
 * Created by Максим on 19.03.2019.
 */
const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
	isFetching:false,
	userId:null,
	email:null,
	login:null,
	isAuth:false
};

const authReducer = (state = initialState, action) => {

	switch (action.type){
		case SET_USER_DATA:
			return {
				...state,
				...action.data,
				isAuth:true
			}

		case TOGGLE_IS_FETCHING:{
			return {...state,isFetching:action.isFetching}
		}
		default:
			return state;
	}
}

export const getUsersAuthThunk= ()=> {
	return (dispatch) => {

		return authAPI.getMe()

			.then(response => {
			if (response.data.resultCode===0){
				let {id,email,login}=response.data.data;
				dispatch(setAuthUserData(id,email,login,true));
			}
		});
	}

}



export const logInThunk=(email,password,rememberMe)=>async (dispatch)=>{


	let response = await authAPI.login(email,password,rememberMe)

			if(response.data.resultCode===0){
				dispatch(getUsersAuthThunk())
			} else {
				let message = response.data.messages.length>0 ? response.data.messages[0]:"Some error"
				dispatch(stopSubmit("login",{_error: message}));
			}

}

export const logOutThunk=()=>async (dispatch)=>{
	let response = await authAPI.logout()

			if(response.data.resultCode===0){
				dispatch(setAuthUserData(null,null,null,false))
			}
}











export const setAuthUserData=(userId,email,login,isAuth)=>({type: SET_USER_DATA,data:{userId,email,login,isAuth}})

export const toggleIsFetching=(isFetching)=>({type:TOGGLE_IS_FETCHING,isFetching})

export default authReducer;