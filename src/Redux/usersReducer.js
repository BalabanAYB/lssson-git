import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN-FOLLOW'
const SET_USERS = 'SET-USERS'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const FOLLOWING_IN_PROGRESS = 'IS_FETHING_DISABLED'


export const follow = (userId) => ({ type: FOLLOW, userId })
export const unFollow = (userId) => ({ type: UN_FOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setUsersTotalCount = (totalCount) => ({ type: SET_USERS_TOTAL_COUNT, totalCount: totalCount })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching: isFetching })
export const toggleIsFollowing = (isFetching, userId) => ({ type: FOLLOWING_IN_PROGRESS, isFetching, userId })

export const getUsersThunk = (currentPage, pageCount) => async (dispatch) => {

        dispatch(toggleIsFetching(true));
       let data = await usersAPI.getUsers(currentPage, pageCount)
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setUsersTotalCount(data.totalCount));
}

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowing(true, id))
      let data = await apiMethod(id)
                if (data.resultCode === 0) {
                    dispatch(actionCreator(id))
                }
                dispatch(toggleIsFollowing(false, id))
}

export const setUnFollowThunk = (id) => async (dispatch) => {
let apiMethod = usersAPI.setUnFollowUsers.bind(usersAPI)
let actionCreator = unFollow;
followUnfollowFlow(dispatch, id, apiMethod, actionCreator)
}
export const setFollowThunk = (id) => async (dispatch) => {
    followUnfollowFlow(dispatch, id, usersAPI.setFollowUsers.bind(usersAPI), follow)
}


let initialState = {
    users: [],
    totalCount: 0,
    pageCount: 5,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const followUnfollowReducers = (boolean, state, action) => {
    return {...state,
    users: state.users.map((u) => {
        if (u.id === action.userId) {
            return { ...u, followed: boolean }
        }
        return u;
    })
}
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
           return followUnfollowReducers(true, state, action)
        }
        case UN_FOLLOW: {
           return followUnfollowReducers(false, state, action)
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_USERS_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}

export default usersReducer;