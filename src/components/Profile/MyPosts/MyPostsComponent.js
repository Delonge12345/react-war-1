/**
* Created by Максим on 21.03.2019.
*/
import React, {Component} from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
//
// const MyPostsContainer = (props) => {
// 	let state = props.store.getState();
//
// 	let AddPost = (text) => {
// 		props.store.dispatch(addPostActionCreator(text));
//
// 	}
// 	let onPostChange = (text) => {
// 		props.store.dispatch(updateNewPostTextActionCreator(text))
// 	}
// 	return (
// 		<MyPosts updateNewPostText={onPostChange} addPost={AddPost}
// 						 postsData={state.profilePage.postsData}
// 						 newPostText={state.profilePage.newPostText}
// 		/>
// 	)
// }













let mapStateToProps=(state)=>{
	return{
		postsData:state.profilePage.postsData,
		newPostText:state.profilePage.newPostText

	}
}

let mapDispatchToProps=(dispatch)=>{
	return{
		addPost:(onNewMyPostText)=>{
			dispatch(addPostActionCreator(onNewMyPostText))
		}
	}
}


const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
// props.dispatch(updateNewPostTextActionCreator(text))