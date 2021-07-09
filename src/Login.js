import React from 'react'
import './Login.css'
import {useState} from 'react';
import { auth } from './Firebase';
import { useDispatch } from 'react-redux';
import {login, logout } from './features/userSlice'


function Login() {
    
    
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [profile,setProfile]=useState('');
    const dispatch=useDispatch()

    const logintoApp=(e)=>{
        e.preventDefault();
        console.log('Hi this login FUnction')
        auth.signInWithEmailAndPassword(email,password)
        .then(
        (userAuth)=>{
            dispatch(
                login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                photoUrl:userAuth.user.photoURL,
            })
            );
        }).catch((error)=>alert(error));
    };
    const register=()=>{
        
        if(!name){
            return alert('Plz enter full Name');
        }; 
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoUrl:profile,
            })
            .then(()=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    photoUrl:profile,
                }));
        
            })
            
        })
        .catch((error)=>alert(error));

    }
    

    
    return (
        <div className='login'>
            <img 
            src='https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks' alt='Logo'/>
            <form>
                <input value={name} type='text' placeholder='Full Name required if registering' onChange={(e)=>setName(e.target.value)}/>
                <input value={profile} onChange={(e)=>setProfile(e.target.value)} placeholder='Profile Url' type='text'/>
                <input  value={email} placeholder='Email' type='email' onChange={(e)=>setEmail(e.target.value)}/>
                <input value={password} placeholder='Password' type='password' onChange={(e)=>setPassword(e.target.value)}/>
                <button type='submit' onClick={logintoApp}>SignIn</button>

            </form>
            <p>Not a member?
                <span className='login__register' onClick={register}>Register Now..</span>
            </p>
            
        </div>
    );
}

export default Login;
