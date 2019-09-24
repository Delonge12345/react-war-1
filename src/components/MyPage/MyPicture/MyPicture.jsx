import React, {Component} from "react";
import Img from "../Img/Img";
import classes from './MyPicture.module.css'
const MyPicture = (props) => {
	let pictureElements = props.pictureData.map((img) => {
		return (
			<Img url={img.url} id={img.id} describe={img.describe}/>
		)
	})
	return (

		<div className={classes.flexImg}>
			<h1>Pictures</h1>
			<div className={classes.flexBlocks}>
				{pictureElements}
			</div>
		</div>
	)
}
export default MyPicture;