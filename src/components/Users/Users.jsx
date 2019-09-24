/**
 * Created by Максим on 16.05.2019.
 */
import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, onPageChanged, totalItemsCount, pageSize, users, ...props}) => {
	return <div>
		<Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalItemsCount}
							 pageSize={pageSize}/>
		<div>
			{


				users.map(u => <User user={u}
														 key={u.id}
														 followDisable={props.followDisable}
														 followThunk={props.followThunk}
														 unfollowThunk={props.unfollowThunk}
					/>
				)
			}
		</div>
	</div>
}
export  default Users;