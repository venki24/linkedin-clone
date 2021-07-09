import React from 'react';
import './Header.css';

import {useDispatch} from 'react-redux'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { auth } from './Firebase';
import {logout} from './features/userSlice'
import {selectUser} from './features/userSlice';
import {useSelector} from 'react-redux';
function Header() {
    const user=useSelector(selectUser)
    const dispatch=useDispatch()
    const logoutapp=()=>{
        dispatch(logout());
        auth.signOut()
    }
    return (
        <div className='header' >
            <div className='header__left'>
                <img src='https://image.flaticon.com/icons/png/512/174/174857.png'
                alt='img'/>
                <div className='header__search'>
                    <SearchIcon />
                    <input type='text' placeholder='Search'/>
                </div>

            </div>
            <div className='header__right'>
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOption Icon={ChatIcon} title='Messaging'/>
                <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
                <HeaderOption avatar={true} onClick={logoutapp}  title='Me'/>
            </div>
        </div>
    )
}

export default Header;
