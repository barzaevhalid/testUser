import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostByIdAndComments, getPostById, postFetch } from '../../redux/asyncActions/action';
import s from './postInfo.module.css'
const PostInfo = () => {

    const { userId, id } = useParams('id')

    const [formState, setFormState] = useState(false)

    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userText, setUserText] = useState('')


    const handleName = (e) => {
        setUserName(e.target.value)
    }
    const handleEmail = (e) => {
        setUserEmail(e.target.value)
    }

    const handleText = (e) => {

        setUserText(e.target.value)
    }

    const formFetch = (e) => {
        e.preventDefault()

        if (userName && userEmail && userText) {
            const formData = {
                name: userName,
                email: userEmail,
                text: userText
            }
            setUserName('')
            setUserEmail('')
            setUserText('')
            dispatch(postFetch(formData))
            alert('Комментрай отправлен')
        }
    }

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPostByIdAndComments(id))
    }, [])

    useEffect(() => {
        dispatch(getPostById(id))
    }, [])

    const post = useSelector(state => state.postAndComments)
    const postId = useSelector(state => state.post)

    const res = useSelector(state => state.postFetch)
    console.log(res);
    return (

        <div className={s.wrapper}>
            <h1>Пост</h1>
            <div className={s.inner}>
                <h2>{postId.title}</h2>
                {postId.body}

            </div>
            <div className={s.comments}>
                <h2>Комментарии</h2>

                <ul className={s.comment}>

                    {post.map(item => {
                        return (<div className={s.comments_inner}>
                            <li>{item.name}</li>
                            <li><a href="#">{item.email}</a></li>
                            <li className={s.three_item}>{item.body}</li>
                        </div>
                        )
                    })}
                </ul>
            </div>
            <button onClick={() => setFormState(!formState)} className={s.formOpenedBtn}>Добавить коментарий</button>

            {formState &&
                <div className={s.comment_form}>

                    <form action="#" onSubmit={(e) => formFetch(e)}>
                        <div>
                            <input type="text" placeholder='Имя' onChange={(e) => handleName(e)} value={userName} />
                        </div>

                        <div>
                            <input type="text" placeholder='e-mail' onChange={(e) => handleEmail(e)} value={userEmail} />
                        </div>

                        <div>
                            <textarea cols="30" rows="10" onChange={(e) => handleText(e)} value={userText}></textarea>
                        </div>
                        <button type='submit' disabled={userName && userEmail && userText ? '' : 'disable'}>Отправить</button>
                    </form>
                </div>}

        </div >
    );
};

export default PostInfo;