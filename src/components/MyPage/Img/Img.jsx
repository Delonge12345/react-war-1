import React, {Component} from "react";
import classes from "./Img.module.css";
const Img = (props) => {
	return (

		<div className={classes.imgBlock}>
			<div className={classes.url}>
				<img className={classes.imgRad} src={props.url}/>
			</div>
			<div className={classes.describeFlex}>
				<h1>{props.describe}</h1>
			</div>
		</div>

	);
};
export default Img;
