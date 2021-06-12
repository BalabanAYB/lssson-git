import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '56bffdcf-e117-4ba9-b60b-e270aeb7ab57'
    }
})

export const usersAPI = {
    getUsers(currentPage, pageCount) {
        return instance.get(`users?page=${currentPage}&count=${pageCount}`)
            .then(response => {
                return response.data
            })
    },
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    getUsersProfile(userId) {
       return profileAPI.getUsersProfile(userId)
        console.warn('The use of this method is already deprecated')
    },
    setFollowUsers(userId) {
        return instance.post(`follow/${userId}`, {})
            .then(response => {
                return response.data
            })
    },
    setUnFollowUsers(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }
}

export const profileAPI = {
    getUsersProfile(userId) {
    return instance.get(`profile/${userId}`)
    .then(response => {
        return response.data
    })
},
getStatus (userId) {
    return instance.get(`profile/status/${userId}`)
    .then(response => {
        return response.data
    })
},
updateStatus (status) {
    return instance.put(`profile/status/`, {
        status:status
    })
    .then(response => {
        return response
    })
}
}

export const authMeAPI = {

    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => {
                if (response.resultCode == 0){
                return response.data
                }
            })
    },

    login (email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
        .then(response => {
            return response.data
        })
    },

    logout () {
        return instance.delete(`auth/login`)
        .then(response => {
            return response.data
        })
    }
}
