const initialState = {
    users: [],
    user: null,
    posts: [],
}
const reducer = (state = initialState, action) => {

   switch(action.type) {
    case "USERS_FETCHING": 

    return {
        ...state,
        users:  action.payload
    }
    case "USER_FETCHING": 
    return {
        ...state,
        user: action.payload
    }
    case "POST_FETCHING": {
        return {
            ...state,
            posts:  action.payload
        }
    }
       default: 
       return state
   }
};

export default reducer;