import React from 'react';
import s from './Users.module.css'
import userPhoto from './../../assect/user.png'
import {NavLink} from "react-router-dom";
import Paginator from "../../utils/Paginator/Paginator"

const Users = (props) => {

    return <div>
        <Paginator {...props} totalItemsCount={props.totalCount} />
        {
            props.users.map(m => <div key={m.id} className={s.container}>
                    <div className={s.friend}>
                        <NavLink to={`profile/` + m.id}>
                            <img className={s.icon} src={m.photos.small != null ? m.photos.small : userPhoto} alt=""/>
                        </NavLink>
                        <div>
                            {m.followed
                                ? <button disabled={props.followingInProgress.some(id => id === m.id)} onClick={ () => { props.setUnFollowThunk(m.id)}
                                   /* props.toggleIsFollowing(true, m.id)
                                    usersAPI.setUnFollowUsers(m.id)
                                        .then((data) => {
                                            if (data.resultCode === 0) {
                                                props.unFollow(m.id)
                                            }
                                            props.toggleIsFollowing(false, m.id)
                                        })*/
                            }>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === m.id)} onClick={ () => {props.setFollowThunk(m.id)}
                                    
                                   /* props.toggleIsFollowing(true, m.id)
                                    usersAPI.setFollowUsers(m.id)
                                        .then((data) => {
                                            if (data.resultCode === 0) {
                                                props.follow(m.id)
                                            }
                                            props.toggleIsFollowing(false, m.id)
                                        })*/
                                }>Follow</button>}
                        </div>
                    </div>
                    <div className={s.info}>
                        <div className={s.infoBlock}>
                            <div className={s.name}>{m.name}</div>
                            <div className={s.status}>{m.status}</div>
                        </div>
                        <div className={s.location}>
                            <div className={s.country}>{'m.location.country'}</div>
                            <div className={s.city}>{'m.location.city'}</div>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
}

export default Users;