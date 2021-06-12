import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import {connect} from "react-redux";
import HeaderContainer from "./components/Header/HeaderContainer";
import { InitializedThunk } from "./Redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import { compose } from "redux";
import WithSuspense from "./components/hoc/WithSuspense";

const Login = React.lazy(() => import("./components/Login/Login"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {

    componentDidMount () {
        this.props.InitializedThunk()
    }
    render () {

        if(!this.props.initialized) {
            return <Preloader />
        }
        
        return (
                    <div className='containerApp'>
                        <HeaderContainer/>
                        <Navbar/>
                        <div className='containerContent'>
                            <Route path='/profile/:userId?' render={() => WithSuspense(ProfileContainer)}/>
                            <Route path='/dialogs' render={() => WithSuspense(DialogsContainer)}/>
                            <Route path='/users' render={() => WithSuspense(UsersContainer)}/>
                            <Route path='/login' render={() => WithSuspense(Login)}/>
                        </div>
                        <Footer/>
                    </div>
        )

    }
    
}

const mapStateToProps = (state) => ({
initialized: state.app.initialized
})

export default compose (
    withRouter,
connect(mapStateToProps, {InitializedThunk})
)(App)
