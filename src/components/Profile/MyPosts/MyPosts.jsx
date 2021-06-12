import s from './MyPosts.module.css';
import React from 'react';
import MyPostForm from './MyPostForm';

const MyPosts = (props) => {

    const onAddPost = (values) => {
        props.addPost(values.post)
    }

    return (
       <div className={s.myPosts}>
        <h3>My posts</h3>
           <MyPostForm onSubmit={onAddPost}  />
       </div>
    );
}

export default MyPosts;