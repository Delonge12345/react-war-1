import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './users.module.css';


let User = ({user,followDisable,followThunk,unfollowThunk}) => {
	return (
		<div>

				<span>
					<div>
						<NavLink to={'/profile/' + user.id}>
							{/*<img src={user.photos.small != null ? user.photos.small : userPhoto}*/}
							<img src={user.photos.small != null ? user.photos.small : user.userPhoto}
									 className={styles.userPhoto}/>
						</NavLink>
					</div>
					<div>
						{user.followed
							? <button disabled={followDisable.some(id => id === user.id)} onClick={() => {
								followThunk(user.id);
							}}>Follow</button>
							: <button disabled={followDisable.some(id => id === user.id)} onClick={() => {
								unfollowThunk(user.id);
							}}>Unfollow</button>}

						</div>
				</span>
			<span>
					<span>
						<div>{user.name}</div>
						<div>{user.status}</div></span>
					<span>
						<div>{'user.location.country'}</div>
						<div>{'user.location.city'}</div></span>
				</span>
		</div>)
}
export  default User;