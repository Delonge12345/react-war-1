import React, {Component} from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
const ProfileInfo = (props) => {
	if(!props.profile){
		return <Preloader/>
	}
	return (
		<div>
			{/*<div>*/}
				{/*<img src="https://im0-tub-ru.yandex.net/i?id=d495590b52b43d5a06be747de77279e1-l&n=13"/>*/}
			{/*</div>*/}
			< div className={classes.decriptionBlock} >
				<img src={props.profile.photos.large} alt=""/>
				<ProfileStatusWithHooks status={props.status} updateStatusThunk = {props.updateStatusThunk}/>
			</div >
		</div>

	)
}
export default ProfileInfo;