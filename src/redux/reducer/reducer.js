const initialState = {
    users: [],
    user: null,
    posts: [],
    post: {},
    postAndComments: [],
    loading: false,
    postFetch: {}
}
const reducer = (state = initialState, action) => {

   switch(action.type) {
    case "USERS_FETCHING": 

    return {
        ...state,
        loading: true,
        users:  action.payload
    }
    case "USER_FETCHING": 
    return {
        ...state,
        loading: true,
        user: action.payload
    }
    case "POSTS_FETCHING": {
        return {
            ...state,
            loading: true,
            posts:  action.payload
        }
    }
    case "POST_FETCHING": {
        return {
            ...state,
            loading: true,
            post:  action.payload
        }
    }
    case "POST_COMMENTS_FETCHING": {
        return {
            ...state,
            loading: true,
            postAndComments: action.payload

        }
    }
    case "POST_FETCH": {
        return {
            ...state,
            postFetch: action.payload

        }
    }
       default: 
       return state
   }
};

export default reducer;