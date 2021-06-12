import s from './Post.module.css';


let Post = (props) => {
    return (
       <div className={s.post}>
           <div className={s.postBlock}>
           <div className={s.iconMen}></div>
           <span>{props.message}</span>
           </div>
           <div>like:{props.likeCount}</div>
       </div>
    );
}

export default Post;