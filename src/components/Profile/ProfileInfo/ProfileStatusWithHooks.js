/**
 * Created by Максим on 31.08.2019.
 */
import React, {useState,useEffect} from "react";
import classes from './ProfileInfo.module.css'




const ProfileStatusWithHooks = (props) => {

	//Рздробили хук на подчасти
	let [editMode, setEditMode] = useState(false)
	let [status, setStatus] = useState(props.status)


  useEffect(()=>{
		setStatus(props.status)
	},[props.status]);



	const activateEditMode = () => {
		setEditMode(true);
	}

	const deActivateEditMode=()=>{
		setEditMode(false);
		props.updateStatusThunk(status);
	}

	const onStatusChange=(e)=>{
		setStatus(e.currentTarget.value)
	}


	return (
		<div>
			<div>
				{!editMode &&
				<span onDoubleClick={activateEditMode}>{props.status || "No status"} </span>
				}
			</div>
			{editMode &&
			<div>
				<input onChange={onStatusChange} autoFocus={true}
							 onBlur= {(deActivateEditMode)}
							 value={status}></input>
			</div>
			}
		</div>
	)
}
export default ProfileStatusWithHooks;