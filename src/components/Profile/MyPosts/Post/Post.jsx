import React, { Component } from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    
  return (
    <div>
      <div className={classes.item}>
        <img src="http://pngimg.com/uploads/mr_bean/mr_bean_PNG32.png" />
        {props.message}
        </div>
        <div>
          <span>like</span> {props.amount}
        </div>
      </div>
   
  );
};

export default Post;
