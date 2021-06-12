import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logoutAuthMeThunk} from "../../Redux/authReducer";
import {getIsAuth, getLogin} from "../../Redux/authSelect";

class HeaderContainer extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
            <Header {...this.props} logout={this.props.logoutAuthMeThunk}/>
        );
    }

}

let mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    login: getLogin(state)
})

export default connect(mapStateToProps, {logoutAuthMeThunk})(HeaderContainer);