import React, { useEffect } from 'react';
import {connect} from "react-redux";
import {compose} from 'redux';
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    toggleIsFollowing,
    toggleIsFetching,
    unFollow,
    getUsersThunk,
    setUnFollowThunk,
    setFollowThunk
} from "../../Redux/usersReducer";
import Preloader from "../common/Preloader/Preloader";
import {WithAuthRedirect} from '../hoc/WithAuthRedirect';
import { getUsers, getTotalCount, getCurrentPage, getPageCount, getIsFetching, getFollowingInProgress } from '../../Redux/usersSelect';


const UsersContainerAPI = (props) => {

    useEffect( () => {
        console.log('qqq')
        props.getUsersThunk (props.currentPage, props.pageCount)
    }, [props.currentPage, props.pageCount]);

    const usersPageNumber = (pageNumber) => {
        props.getUsersThunk (pageNumber, props.pageCount)
        props.setCurrentPage(pageNumber)
    }

return <>
{props.isFetching ? <Preloader/> : null}
<Users totalCount={props.totalCount}
       pageCount={props.pageCount}
       currentPage={props.currentPage}
       usersPageNumber={usersPageNumber}
       users={props.users}
       follow={props.follow}
       followingInProgress={props.followingInProgress}
       toggleIsFollowing={props.toggleIsFollowing}
       setUnFollowThunk={props.setUnFollowThunk}
       setFollowThunk={props.setFollowThunk}
/>
</>
}

/*class UsersContainerAPI extends React.Component {

    componentDidMount() {
        props.getUsersThunk (this.props.currentPage, this.props.pageCount)
    }

    usersPageNumber = (pageNumber) => {
        this.props.getUsersThunk (pageNumber, this.props.pageCount)
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalCount={this.props.totalCount}
                   pageCount={this.props.pageCount}
                   currentPage={this.props.currentPage}
                   usersPageNumber={this.usersPageNumber}
                   users={this.props.users}
                   follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress}
                   toggleIsFollowing={this.props.toggleIsFollowing}
                   setUnFollowThunk={this.props.setUnFollowThunk}
                   setFollowThunk={this.props.setFollowThunk}
            />
        </>
    }
}*/

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        pageCount: getPageCount(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
    /*return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        pageCount: state.usersPage.pageCount,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }*/
}

export default compose (connect(mapStateToProps,
    {follow, unFollow, setCurrentPage,
        toggleIsFetching, toggleIsFollowing,
        setUnFollowThunk, setFollowThunk, getUsersThunk }),
        WithAuthRedirect
        ) (UsersContainerAPI)