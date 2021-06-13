import React, { useEffect, useState } from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {compose} from 'redux';
import {newUsersProfile, usersProfileThunk, getStatusThunk, updateStatusThunk,  savePhotos} from "../../Redux/profileReducer";
import {withRouter} from "react-router";
import {WithAuthRedirect} from '../hoc/WithAuthRedirect';
import { getUserId } from '../../Redux/authSelect';
import { getProfile, getStatus } from '../../Redux/profileSelect';



const ProfileContainerAPI = (props) => {

    let [userId, setUsersId] = useState(props.match.params.userId)
    useEffect( () => {
        
        if(!userId) setUsersId(props.userId)
        props.usersProfileThunk(userId)
        props.getStatusThunk(userId)
    }, [userId])

    useEffect ( () => {
        if (!props.match.params.userId) setUsersId(props.userId)
    }, [props.match.params.userId])


    return <Profile {...props} isOwner={!props.match.params.userId} status={props.status}
     updateupdateStatusThunk={props.updateStatusThunk} profile={props.profile}/>
}

let mapStateToProps = (state) => {
    return {
        state: state,
        profile: getProfile(state),
        userId: getUserId(state),
        status: getStatus(state),
    }
}

export default compose (
    connect(mapStateToProps, {newUsersProfile, usersProfileThunk, getStatusThunk, updateStatusThunk, savePhotos}),
    WithAuthRedirect,
    withRouter
) (ProfileContainerAPI);