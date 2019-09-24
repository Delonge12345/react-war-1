/**
 * Created by Максим on 06.06.2019.
 */

import * as axios from "axios";

const instance = axios.create({
	withCredentials:true,
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	headers:{
		"API-KEY":"ccd2c24a-9b31-47bf-ba95-325f89b05cf7"
	}
})
export const usersAPI = {
	getUsers(currentPage , pageSize){

	return instance.get(`users?page=${currentPage}&count=${pageSize}`)
		.then(response => {
			return response.data;
		});
	},

	follow(userId){
		return instance.post(`follow/${userId}`,{},)
},

	unfollow(userId){
		return instance.delete(`follow/${userId}`,)
},

	getProfile(userId){
		console.warn('Obsolete method. Please profileAPI object.')
		return profileAPI.getProfile(userId);

	}

}


export const profileAPI = {

	getProfile(userId){
		return instance.get(`profile/`+userId)

	},

	getUsersStatus(userId){
		return instance.get(`profile/status/`+userId)
	},

	updateStatus(status){
		return instance.put(`profile/status`, {status: status})
	}
}



export const authAPI = {
	getMe(){
		return instance.get(`auth/me`)
	},

	login(email,password,rememberMe=false){
		return instance.post(`auth/login`,{email,password,rememberMe})
	},

	logout(){
		return instance.delete(`auth/login`);
	}

}


