/* eslint-disable react/prop-types */
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useState } from "react";
import { Link } from "react-router-dom";
dayjs.extend(relativeTime);
export default function PostCard({
  authorName,
  authorImage,
  text,
  commentsArr,
  postImage,
  time,
}) {
  const [isliked, setIsLiked] = useState(false);
  const [postLikes, setPostLikes] = useState(Math.ceil(Math.random() * 15));

  function handleLiking() {
    if (isliked) {
      setPostLikes((prev) => (prev -= 1));
      setIsLiked(false);
    } else {
      setPostLikes((prev) => (prev += 1));
      setIsLiked(true);
    }
  }

  return (
    <article className="flex justify-start gap-6 border-b border-light-200 py-6">
      <img
        className="w-12 h-12 md:w-10 md:h-10 rounded-full"
        src={authorImage}
        alt=""
      />
      <section className="w-4/5 flex flex-col gap-4">
        <p className="font-bold">@{authorName.replace(" ", "")}</p>
        <p>{text}</p>
        <img
          className="w-full h-60 object-cover"
          src={postImage}
          alt="post image"
        />
        <div className="flex items-center gap-16">
          <button className="flex items-center gap-2" onClick={handleLiking}>
            <img
              className="w-5 h-5"
              src={isliked ? "./public/liked.png" : "./public/like.png"}
              alt="like icon"
            />
            <p>{postLikes} Likes</p>
          </button>
          <Link to="/feeds/:id" className="flex items-center gap-2">
            <img className="w-5 h-5" src="./public/comm.png" alt="like icon" />
            <p>{commentsArr.length} Comments</p>
          </Link>
        </div>
        <p>{dayjs(time).fromNow()}</p>
      </section>
    </article>
  );
}
