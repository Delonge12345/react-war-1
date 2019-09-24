/**
 * Created by Максим on 25.08.2019.
 */
import {getUsersAuthThunk} from "./auth-reducer";
const SET_INITIALIZED_SUCCESS = "SET_INITIALIZED_SUCCESS";



let initialState = {
	initialized:false,
	isFetching:false,
	userId:null,
	email:null,
	login:null,
	isAuth:false
}

const appReducer	= (state = initialState, action) => {

	switch (action.type){
		case SET_INITIALIZED_SUCCESS:
			return {
				...state,
				initialized:true
			}

		default:
			return state;
	}
}



export const initializedApp= ()=>(dispatch)=>{
	let promise = dispatch(getUsersAuthThunk())
	Promise.all([promise])
		.then(()=>{
		dispatch(initializedSuccess());

}
		)}

export const initializedSuccess=()=>({type: SET_INITIALIZED_SUCCESS})
export default appReducer;