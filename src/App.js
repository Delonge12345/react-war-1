import React, {Component} from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UserContainer from "./components/Users/UsersContainer"
import Route from "react-router-dom/es/Route";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import store from "./redux/redux-store";
import {withRouter} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux"
import {connect} from "react-redux";
import {compose} from "redux";
import {initializedApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";



const DialogsContainer = React.lazy(()=>import("./components/Dialogs/DialogsComponent"));
const ProfileContainer = React.lazy(()=>import("./components/Profile/ProfileContainer"));





class App extends Component {
	componentDidMount(){
		this.props.initializedApp();
	}
	render() {
		if(!this.props.initialized){
			return <Preloader/>
		}

		return (

			<div className="app-wrapper">
				<HeaderContainer />
				<Nav/>
				<div className="app-wrapper-content">
					<Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
					<Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
					<Route path="/music" render={() => <Music/>}/>
					<Route path="/news" render={() => <News/>}/>
					<Route path="/settings" render={() => <Settings/>}/>
					<Route path="/users" render={()=> <UserContainer/>}/>
					<Route path="/login" render={() => <Login/>}/>
					{/*<Route path="/mypage" render={()=><MyPage />}/>*/}
				</div>
			</div>

		);
	};
}


let mapStateToProps = (state)=>({
	initialized:state.app.initialized
});




let AppContainer = compose(
	withRouter,
	connect(mapStateToProps,{initializedApp})
)(App)



const SocialJSApp = (props)=>{
		return <BrowserRouter>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</BrowserRouter>
}


export default SocialJSApp;