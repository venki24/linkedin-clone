import React, { forwardRef } from "react";
import "./Post.css";
import InputOption from "./InputOption";
import { Avatar } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ShareIcon from '@material-ui/icons/Share';
import CommentIcon from '@material-ui/icons/Comment';
import {useSelector} from 'react-redux';
import {selectUser}from './features/userSlice';

const Post=forwardRef(({ name, description, message, photoUrl },ref)=>{

  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className='post__button'>
          <InputOption Icon={ThumbUpIcon} 
          title='Like' 
          color='gray'/>
          <InputOption Icon={CommentIcon} 
          title='Comment' 
          color='gray'/>
          <InputOption Icon={ShareIcon} 
          title='Share' 
          color='gray'/>
          <InputOption Icon={SendIcon} 
          title='Send' 
          color='gray'/>
      </div>
    </div>
  );
})

export default Post;
