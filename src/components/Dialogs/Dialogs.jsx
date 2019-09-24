import React, {Component} from "react";
import classes from './Dialogs.module.css';
import {NavLink, Redirect} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageActionCreator, sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogsReducer";
import Message from "./MessageItem/MessageItem";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
// class Dialogs extends React.Component{
//
//
// 	render() {
// 		return
// 	}
//
// }
const maxLength10 = maxLengthCreator(10);
const AddMessageForm = (props) => {
	return (

		<form onSubmit={props.handleSubmit}>
			<div><Field component={Textarea} name="onNewMessageText" placeholder="Enter your message"
									validate={[required, maxLength10]}></Field></div>
			<div>
				<button>Send Message</button>
			</div>
		</form>
	)
}
const MessageReduxForm = reduxForm({
	form: "dialogAddMessageForm"
})(AddMessageForm)
const Dialogs = (props) => {
	let dialogsElements = props.dialogsData.map((dialog) => {
		return (
			<DialogItem name={dialog.name} id={dialog.id}/>
		)
	});
	const AddNewMessage = (formData) => {
		props.onClickText(formData.onNewMessageText);
	}
	let messagesElements = props.messagesData.map((message) => {
		return (
			<Message textItem={message.textItem}/>
		)
	});
	let newMessageText = props.newMessageText;
	let onSendMessageClick = () => {
		props.onClickText();
	}
	// let onNewMessageText = (e) => {
	// 	let mesTextmesText = e.target.value;
	// 	props.onNewText(mesTextmesText);
	// }
	if (!props.isAuth) return <Redirect to={"/login"}/>;
	return (

		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={classes.messages}>{messagesElements}</div>
			<div>
				<MessageReduxForm onSubmit={AddNewMessage }/>
			</div>
		</div>

	)
}
export default Dialogs;