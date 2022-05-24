
export const getUsers = () => {
    return dispatch => {
        dispatch({type:"FETCH", payload: true})
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => dispatch({type: "USERS_FETCHING", payload: users}))
        .then(dispatch({type: "FETCH", payload: false}))
    }
}

export const getUserById = (id) => {
    return dispatch => {
        dispatch({type:"FETCH", payload: true})
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(user => dispatch({type: "USER_FETCHING", payload: user}))
        .then(dispatch({type: "FETCH", payload: false}))
    }
}
export const getPosts = () => {
    return dispatch => {
        dispatch({type:"FETCH", payload: true})
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => dispatch({type: "POSTS_FETCHING", payload: posts}))
        .then(dispatch({type: "FETCH", payload: false}))
    }
}

export const getPostById = (id) => {
    return dispatch => {
        dispatch({type:"FETCH", payload: true})
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(post => dispatch({type: "POST_FETCHING", payload: post}))
        .then(dispatch({type: "FETCH", payload: false}))
    }
}

export const getPostByIdAndComments = (id) => {
    return dispatch => {
        dispatch({type:"FETCH", payload: true})
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => response.json())
        .then(postComments => dispatch({type: "POST_COMMENTS_FETCHING", payload: postComments}))
        .then(dispatch({type: "FETCH", payload: false}))
    }
}

export const postFetch = (data) => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
              body: JSON.stringify(data)
        }).then(response => response.json())
        .then(data => dispatch({type: "POST_FETCH", payload: data}))
    }
}