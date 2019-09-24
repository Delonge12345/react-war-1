import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";

let store = {
	_state: {
		dialogsPage: {
			messagesData: [
				{id: 1, textItem: 'Hi!'},
				{id: 2, textItem: 'How are you?'},
				{id: 3, textItem: 'I am fine!'},
				{id: 4, textItem: 'Me too!'},
				{id: 5, textItem: 'Lets Gooo!'},
				{id: 6, textItem: 'Oooppps!'}
			],
			newMessageText: '',
			dialogsData: [
				{id: 1, name: 'Maxim'},
				{id: 2, name: 'Serega'},
				{id: 3, name: 'Kolyan'},
				{id: 4, name: 'Nikita'},
				{id: 5, name: 'Pashok'},
				{id: 6, name: 'Diman'}
			],
		},
		profilePage: {
			postsData: [
				{id: 1, message: 'Hi, how are you?', amount: '10'},
				{id: 2, message: 'It\'s my first post!', amount: '12'},
			],
			newPostText: '',
		},
		myPage: {
			pictureData: [
				{
					url: 'https://im0-tub-ru.yandex.net/i?id=3f265f884ccf98976f8a58209d4fb728-sr&n=13',
					id: '1',
					describe: 'Picture 1'
				},
				{
					url: 'https://im0-tub-ru.yandex.net/i?id=3f265f884ccf98976f8a58209d4fb728-sr&n=13',
					id: '2',
					describe: 'Picture 2'
				},
				{
					url: 'https://im0-tub-ru.yandex.net/i?id=3f265f884ccf98976f8a58209d4fb728-sr&n=13',
					id: '3',
					describe: 'Picture 3'
				},
			]
		},
		sidebar:{},
	},
	getState(){
		return this._state
	},
	// callSubscriber(){
	// 	console.log('Hi');
	// },
	// subscribe(observer){
	// 	this.callSubscriber = observer;
	// },

	dispatch(action){

		this._state.profilePage = profileReducer(this._state.profilePage,action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);

		// this.callSubscriber(this._state) ;

	},


}
export default store;
window.store = store;

