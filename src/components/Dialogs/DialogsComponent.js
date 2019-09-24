/**
 * Created by Максим on 21.03.2019.
 */
import React, {Component} from "react";
import {addMessageActionCreator, sendMessageCreator,} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


//
// const DialogsComponent = (props) => {
// 	let state = props.store.getState();
//
//
//
//
// 	let onClickText=()=>{
// 		props.store.dispatch(sendMessageCreator());
// 	}
//
// 	let onNewText=(mesText)=>{
//
// 		props.store.dispatch(updateNewMessageCreator(mesText));
// 	}
//
// 	return(
// 		<Dialogs  onClickText={onClickText}  onNewText={onNewText}
// 							dialogsData={state.dialogsPage.dialogsData}
// 							messagesData={state.dialogsPage.messagesData}
// 							newMessageText={state.dialogsPage.newMessageText}
//
// 		/>
// 	)
// }




let mapStateToProps = (state)=>{
	return{
		dialogsData:state.dialogsPage.dialogsData,
		dialogsPage:state.dialogsPage,
		messagesData:state.dialogsPage.messagesData,
    newMessageText:state.dialogsPage.newMessageText,
	}
}

let mapDispatchToProps = (dispatch)=>{
	return{
		onClickText: (onNewMessageText)=>{
			dispatch(sendMessageCreator(onNewMessageText))
		}
	}
}


//Обернули в функцию compose

// let authRedirectComponent= withAuthRedirect(Dialogs);
//
// const DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(authRedirectComponent);
//
// export default DialogsContainer;


export default compose(
	connect(mapStateToProps,mapDispatchToProps),
	withAuthRedirect
)(Dialogs)