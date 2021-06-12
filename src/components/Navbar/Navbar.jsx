import {NavLink} from "react-router-dom";
import s from './Navbar.module.css';

let Navbar = () => {
    return (
        <div className={s.navigation}>
            <NavLink activeClassName={s.active} to='/profile'>Профиль</NavLink>
            <NavLink activeClassName={s.active} to='/dialogs'>Сообщения</NavLink>
            <NavLink activeClassName={s.active} to='/news'>Новости</NavLink>
            <NavLink activeClassName={s.active} to='/users'>Люди</NavLink>
            <NavLink activeClassName={s.active} to='/settings'>Настройки</NavLink>
        </div>
    );
}

export default Navbar;