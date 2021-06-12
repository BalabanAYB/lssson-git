import {addPost, newPostText} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newTextChange: state.profilePage.newTextChange
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost,newPostText})(MyPosts)

export default MyPostsContainer;