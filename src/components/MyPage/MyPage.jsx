import React from "react";
import classes from './MyPage.module.css'
import MyPicture from "./MyPicture/MyPicture";
const MyPage = (props) => {

	return (

		<div className={classes.myPage}>
				<MyPicture pictureData={props.pictureData} />
				<MyPicture pictureData={props.pictureData}/>

		</div>
	)
}
export default MyPage;