import s from "./Profile.module.css";
import Profileinfo from "./Profileinfo/Profileinfo";
import Post from "./Post/Post";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    let state = props.state.profilePage

    let postData = state.posts.map(post => <Post message={post.message} likeCount={post.likeCount}/>)
    return <div className={s.content}>
            <Profileinfo profile={props.profile} status={props.status} updateStatusThunk={props.updateStatusThunk}/>
            <MyPostsContainer store={props.store}/>
            {postData}
        </div>

}

export default Profile;