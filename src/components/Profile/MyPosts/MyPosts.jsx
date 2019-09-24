import React, {Component} from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";



const maxLength10 = maxLengthCreator(10);

const AddMyPostsForm=(props)=>{
	return(
	<form onSubmit={props.handleSubmit}>
		<div><Field component={Textarea} name="onNewMyPostText" validate={[required,maxLength10]}></Field></div>

		<div><button>AddPost</button></div>
	</form>
	)
}


const PostsAddRedux = reduxForm({
	form:"MyPostsTextForm"
})(AddMyPostsForm)




const MyPosts = (props) => {
	let postselements = props.postsData.map((post) => {
		return (
			<Post message={post.message} amount={post.amount}/>
	)
})

	const addMyPostsText=(formData)=>{
		props.addPost(formData.onNewMyPostText);
	}

	let onAddPost = () => {
		props.addPost();
	}


	return (
		<div className={classes.myPostBlock}>
			<h3>My Posts</h3>


			<PostsAddRedux onSubmit={addMyPostsText}/>

			<div className={classes.posts}>New Post</div>
			{postselements}
		</div>


	)
}
export default MyPosts;