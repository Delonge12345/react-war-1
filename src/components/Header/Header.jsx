import React, { Component } from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header=(props)=>{
	return(
    <header className={classes.header}>
      <img src="https://avatars.mds.yandex.net/get-pdb/1368870/4b7c46bc-08b3-4296-98a0-4a969e101280/s1200" />
			<div className={classes.loginBlock}>
				{props.isAuth ? props.login
					:<NavLink to={'/login'}>Login</NavLink>
				}
			</div>
    </header>
	)
}

export default Header;