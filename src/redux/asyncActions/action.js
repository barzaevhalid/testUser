
export const getUsers = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => dispatch({type: "USERS_FETCHING", payload: users}))
    }
}

export const getUserById = (id) => {
    return dispatch => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(user => dispatch({type: "USER_FETCHING", payload: user}))
    }
}
export const getPosts = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => dispatch({type: "POST_FETCHING", payload: posts}))
    }
}