import React from 'react';
import s from './header.module.css'
import img from '../../assets/logo.svg'
import Button from '../button/Button';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.header__inner}>
                <Link to='/' className={s.logo}>
                    <img src={img} alt="" />
                </Link>
                <div className="header-buttons">
                    <Button text='Версия для слабовидящих' />
                    <Button text='Мой профиль' />

                </div>
            </div>

        </div>
    );
};

export default Header;