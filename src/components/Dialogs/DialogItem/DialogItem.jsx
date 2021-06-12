import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

   let path = props.id

    return  (
        <div className={s.dialogItem}>
        <NavLink activeClassName={s.active} to={'/dialogs/' + path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;