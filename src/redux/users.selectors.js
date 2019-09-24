/**
 * Created by Максим on 26.08.2019.
 */

//Selectors
export const getUsers=(state)=>{
	return state.usersPage.users;
}

export const getPageSize=(state)=>{
	return  state.usersPage.pageSize
}

export const getTotalUsersCount=(state)=>{
	return state.usersPage.totalUsersCount;
}

export const getCurrentPage=(state)=>{
	return state.usersPage.currentPage;
}

export const getIsFetching=(state)=>{
	return state.usersPage.isFetching;
}

export const getFollowDisable=(state)=>{
	return state.usersPage.followDisable;
}