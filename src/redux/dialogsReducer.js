/**
 * Created by Максим on 19.03.2019.
 */

const SEND_MESSAGE = 'SEND_MESSAGE';


let initialState = {
	messagesData: [
		{id: 1, textItem: 'Hi!'},
		{id: 2, textItem: 'How are you?'},
		{id: 3, textItem: 'I am fine!'},
		{id: 4, textItem: 'Me too!'},
		{id: 5, textItem: 'Lets Gooo!'},
		{id: 6, textItem: 'Oooppps!'}
	],
	dialogsData: [
		{id: 1, name: 'Maxim'},
		{id: 2, name: 'Serega'},
		{id: 3, name: 'Kolyan'},
		{id: 4, name: 'Nikita'},
		{id: 5, name: 'Pashok'},
		{id: 6, name: 'Diman'}
	]
}
export const sendMessageCreator = (onNewMessageText) => {
	return {
		type: SEND_MESSAGE,
		onNewMessageText
	}
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE: {
			let bodyMessage = action.onNewMessageText;
			return {...state, messagesData: [...state.messagesData, {id: 6, textItem: bodyMessage}]};
		}
		default:
			return state;
	}
}
export default dialogsReducer;