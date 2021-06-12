import React, { useEffect, useState } from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {compose} from 'redux';
import {newUsersProfile, usersProfileThunk, getStatusThunk, updateStatusThunk} from "../../Redux/profileReducer";
import {withRouter} from "react-router";
import {WithAuthRedirect} from '../hoc/WithAuthRedirect';
import { getUserId } from '../../Redux/authSelect';
import { getProfile, getStatus } from '../../Redux/profileSelect';



const ProfileContainerAPI = (props) => {

    let [userId, getUserId] = useState(props.match.params.userId)

    useEffect( () => {
        if(!userId) getUserId(props.userId)
        
        props.usersProfileThunk(userId)
        props.getStatusThunk(userId)
    }, [userId])

    return <Profile {...props} status={props.status}
     updateupdateStatusThunk={props.updateStatusThunk} profile={props.profile}/>
}

let mapStateToProps = (state) => {
    return {
        state: state,
        profile: getProfile(state),
        userId: getUserId(state),
        status: getStatus(state)
    }
}

export default compose (
    connect(mapStateToProps, {newUsersProfile, usersProfileThunk, getStatusThunk, updateStatusThunk}),
    WithAuthRedirect,
    withRouter
) (ProfileContainerAPI);