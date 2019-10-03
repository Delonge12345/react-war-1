import React, {Component} from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile,updateStatusThunk,status,isOwner,savePhoto}) => {

	let [editMode, setEditMode] = useState(false)



	if (!profile) {
		return <Preloader/>
	}

	const onMainPhotoSelected = (e)=>{
		if(e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
	}





	return (
		<div>
			< div className={classes.decriptionBlock}>
				<img src={profile.photos.large} alt=""/>
				{<input type="file" onChange={onMainPhotoSelected}/> }

				{editMode ? <ProfileDataForm profile={profile}/>
									: <ProfileData goToEditMode={()=>{setEditMode(true)}} profile={profile} isOwner={isOwner}/>
				}


				<ProfileStatusWithHooks status={status} updateStatusThunk={updateStatusThunk}/>
			</div >
		</div>

	)
}







const ProfileData = ({profile,isOwner,goToEditMode})=>{
	return <div>

		{<div><button onClick={goToEditMode}>edit</button></div>}
		<div><b>Full name</b>: {profile.fullName}</div>
		<div><b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}</div>
		{profile.lookingForAJob &&
		<div><b>My professionals skills</b>: {profile.lookingForAJobDescription}</div>
		}
		<div><b>About me</b>: {profile.aboutMe}</div>
		<div><b>Contacts</b>: {Object.keys(profile.contacts).map(key=>{
			return <Contact key = {key} contactTitle = {key} contactValue={profile.contacts[key]}/>
		})}</div>
	</div>
}



const Contact = ({contactTitle,contactValue})=>{
	return <div className={classes.contact}><b>- {contactTitle}</b>: {contactValue}	</div>
}


export default ProfileInfo;