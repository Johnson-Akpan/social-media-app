import "./post.css"
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post}) {
  // console.log(post);
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like +1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImage"
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <span>⁝</span>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText"> {post?.desc}</span>
          <img src={post.photo} alt="" className="postImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="/assets/icons/like.png"
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src="/assets/icons/love.png"
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter"> {like}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"> {post.comment}</span>
          </div>
        </div>
      </div>
    </div>
  );
  
}
