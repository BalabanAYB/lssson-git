export const getUsers = (state) => {
   return state.usersPage.users
}

export const getTotalCount = (state) => {
   return state.usersPage.totalCount
}

export const getCurrentPage = (state) => {
   return state.usersPage.currentPage
}

export const getPageCount = (state) => {
   return state.usersPage.pageCount
}

export const getIsFetching = (state) => {
   return state.usersPage.isFetching
}

export const getFollowingInProgress= (state) => {
   return state.usersPage.followingInProgress
}