import React, {Component} from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsComponent";


const Profile = (props) => {

	return (
		<div>
			<ProfileInfo profile={props.profile} status={props.status} updateStatusThunk={props.updateStatusThunk}/>
			<MyPostsContainer />
		</div>
	)
}
export default Profile;