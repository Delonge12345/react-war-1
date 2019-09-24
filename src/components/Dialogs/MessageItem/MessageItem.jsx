import React, {Component} from "react";
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Message = (props) => {
	return (
		<div className={classes.messageItem}>{props.textItem}</div>
	)
}




export default Message;