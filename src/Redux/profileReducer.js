import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';
const NEW_USERS_PROFILE = 'NEW_USERS_PROFILE';
const GET_STATUS = 'GET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTOS = 'SAVE_PHOTOS';

export const addPost = (post) => ({ type: ADD_POST, post })
export const deletePost = (id) => ({ type: DELETE_POST, id })
export const newPostText = (text) => ({ type: NEW_POST_TEXT, text: text })
export const newUsersProfile = (profile) => ({ type: NEW_USERS_PROFILE, profile })
export const getStatus = (status) => ({ type: GET_STATUS, status })
export const updateStatus = (status) => ({ type: UPDATE_STATUS, status })
export const setPhotosAdd = (photos) => ({type: SAVE_PHOTOS, photos})

export const usersProfileThunk = (userId) => async (dispatch) => {
    let data = await usersAPI.getUsersProfile(userId)
    dispatch(newUsersProfile(data))
}

export const getStatusThunk = (userId) => async (dispatch) => {

    let data = await profileAPI.getStatus(userId)
    dispatch(getStatus(data))
}

export const savePhotos = (photos) => async (dispatch) => {
    debugger
    let data = await profileAPI.setPhotos(photos)
    if (data.data.resultCode == 0) {
        dispatch(setPhotosAdd(data.data.data.photos))
    }
}


export const updateStatusThunk = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.data.resultCode === 0) {
        dispatch(updateStatus(status))
    }
}

let initialState = {
    posts: [
        { message: 'Привет React', likeCount: 34, id: 0 },
        { message: 'Это мое первое приложение', likeCount: 4, id: 1 },
        { message: 'Оу', likeCount: 10, id: 2 },
    ],
    newTextChange: '',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                message: action.post,
                likeCount: 0,
                id: state.posts.length
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        case NEW_USERS_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case GET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.id)

            }
        }

        case UPDATE_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        case SAVE_PHOTOS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default: return state;
    }
}

export default profileReducer;