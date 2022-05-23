import React from 'react';
import { Link } from 'react-router-dom';
import s from './user.module.css'
const User = ({ user }) => {


    return (
        <div className={s.user}>
            <div className={s.userName}>{user.name}</div>
            <div className={s.city}>{user.address.city}</div>
            <Link to={`user-page/${user.id}`} className={s.user_link}>Смотреть профиль</Link>
        </div >
    );
};

export default User;