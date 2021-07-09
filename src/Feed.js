import React from 'react'
import './Feed.css'
import Post from './Post';

import { useState,useEffect} from 'react';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import EventIcon from '@material-ui/icons/Event';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import {db} from './Firebase';
import firebase from 'firebase';
import {useSelector} from 'react-redux';
import {selectUser} from './features/userSlice';
import FlipMove from 'react-flip-move';
function Feed() {
    const user=useSelector(selectUser)
    const [input,setinput]=useState('');
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        db.collection('posts')
        .orderBy('timestamp','desc')
        .onSnapshot(snapshot=>
            setPosts(snapshot.docs.map((doc)=>(
                {
                id:doc.id,
                data:doc.data(),
                }
            )))
        )
    },[])
    const sendPost=(e)=>{
        e.preventDefault();
        db.collection('posts').add({
            name:user.displayName,
            description:user.email,
            message:input,
            photoUrl:user.photoUrl || '',
            timestamp:firebase.firestore.FieldValue.serverTimestamp()

        })
        setinput('');

        

    }
    return (
        <div className='feed'>
            <div className='feed_inputContainer'>
                <div className='feed__input'>
                <CreateIcon/>
                <form>
                    <input value={input} 
                    onChange={(e)=>setinput(e.target.value)} 
                    type='text'/>
                    <button type='submit' onClick={sendPost}>Send</button>
                </form>
                </div>
                <div className='feed__inputOptions'>
                <InputOption Icon={ImageIcon} 
                title='Photo' 
                color='#7005F9'/>
                <InputOption Icon={SubscriptionsIcon} 
                title='Video' 
                color='#E7A33E'/>
                <InputOption Icon={EventIcon} 
                title='Event' 
                color='#C0CBCD'/>
                <InputOption Icon={CalendarViewDayIcon} 
                title='Write article' 
                color='#7FC15E'/>
                </div>
            </div>
            <FlipMove>
            {posts.map(({id,data:{name,description,message,photoUrl}})=>(
            <Post key={id}
            name={name}
            message={message}
            description={description}
            photoUrl={photoUrl}
            />
            ))}
            </FlipMove>
            
        </div >
    )
}

export default Feed;
