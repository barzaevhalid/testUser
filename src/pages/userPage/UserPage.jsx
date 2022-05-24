import React, { useEffect, useState } from 'react';
import { getUserById, getPosts } from '../../redux/asyncActions/action';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


import s from './userPage.module.css'

const UserPage = () => {
    const id = useParams('id')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserById(id.id))
        dispatch(getPosts())
    }, [])

    const user = useSelector(state => state.user)
    const userPosts = useSelector(state => state.posts)

    const [renderPost, setRenderPost] = useState(false)

    const renderPosts = userPosts.map((item, i) => {
        if (i < 3 && !renderPost) {
            return (
                <Link to={`post/${item.id}`} className={s.post}>
                    <h3 className={s.title}>{item.title}</h3>
                    <div className={s.text}>{item.body}...</div>
                </Link>
            )
        }
        if (renderPost) {
            return (
                <Link to={`post/${item.id}`} className={s.post}>
                    <h3 className={s.title}>{item.title}</h3>
                    <div className={s.text}>{item.body}...</div>
                </Link>
            )
        }
    })

    if (user) {
        return (
            <div className={s.userPage}>
                <table className={s.iksweb}>
                    <tbody>
                        <tr>
                            <td className={s.empty} ></td>
                            <td colSpan="5"><h2 className={s.userName}>{user.name}</h2></td>
                            <td className={s.empty}></td>
                        </tr>
                        <tr>
                            <td className={s.empty}></td>
                            <td>{user.address.city}</td>
                            <td>{user.email}</td>
                            <td>+{user.phone}</td>
                            <td> <button className={s.user_btn}>Написать сообщение</button></td>
                            <td> <button className={s.user_btn}>Предложить сходить на концерт</button></td>
                            <td className={s.empty}></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>{user.website}</td>
                            <td>{user.company.bs}</td>

                        </tr>
                        <tr><td colSpan='7' className={s.space}></td></tr>

                    </tbody>
                </table>
                <div className={s.posts}>
                    <div className={s.posts_inner}>
                        <h3 className={s.posts_title}>Посты</h3>
                        {renderPosts}
                        <button onClick={() => setRenderPost(!renderPost)}>{!renderPost ? 'Смотреть все' : 'Скрыть'}</button>
                    </div>
                </div>
                <div className={s.public}>
                    <h3 className={s.title}>
                        Публикации
                    </h3>
                    <div className={s.publications}>
                        <div className={s.public_box}></div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div>Нет данных</div>
        )
    }

};

export default UserPage;