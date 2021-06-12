import {addMessage} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from '../hoc/WithAuthRedirect';
import {compose} from 'redux';

const mapStateToProps = (state) => {
    return {
        state: state.dialogsPage
    }
}

/*const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            let action = addMessageActionCreator()
            dispatch(action)
        },
        newMessageText: (text) => {
            let action = newMessageTextActionCreator(text)
            dispatch(action)
        }
    }
}*/

export default compose (
    connect(mapStateToProps, {addMessage}),
    WithAuthRedirect
) (Dialogs);