import s from './Header.module.css';
import { NavLink } from "react-router-dom";

let Header = (props) => {
    const logout = () => {
        props.logoutAuthMeThunk()
    }
    return (
        <header className={s.header}>
            <div className={s.logo}></div>
            <div className={s.loginBlock}>
                {props.isAuth ? <div>
                    {props.login}
                    <button onClick={logout} >Выйти</button>
                </div>
                    : <NavLink to='/login'>Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;