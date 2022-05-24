import React, { useState } from 'react';
import SiteInformation from '../siteInformation/SiteInformation';
import User from '../user/User'

import { useEffect } from 'react';
import { getUsers } from '../../redux/asyncActions/action';
import { useDispatch, useSelector } from 'react-redux';

import s from './info.module.css'
const Info = () => {

    const [renderUser, setRenderUser] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const users = useSelector(state => state.users)
    const renderUsers = users.map((user, i) => {
        if (i < 4 && renderUser === false) {
            return <User key={user.id} user={user} />
        }

        if (renderUser) {
            return <User key={user.id} user={user} />
        }
    })

    return (
        <div className={s.info}>
            <div className={s.info__top}>
                <h2 className={`${s.title} ${s.title__styles}`}>
                    Купили билеты
                </h2>
                <div className={s.number}>{renderUser ? renderUsers.length : renderUsers.length - 6}/ <span>{users.length}</span></div>
            </div>
            <div className={s.user__wrapper}>
                {renderUsers}
            </div>
            <button className={s.renderButton} onClick={() => setRenderUser(!renderUser)}>{!renderUser ? 'Показать всех' : 'Скрыть'}</button>

            <SiteInformation />
        </div>
    );
};

export default Info;