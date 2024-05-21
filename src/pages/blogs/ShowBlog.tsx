import { useParams } from "react-router";
import { useGetOneBlog } from "../../hooks/useBlogs";
import LoadingSection from "../../components/LoadingSection";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import toast from "react-hot-toast";
import { useAuthContext } from "../../../context/AuthContext";
import { useState } from "react";
import axios from "axios";
import { apiUrl } from "../../utils/env";
import useGetUsers from "../../hooks/useUsers";
import Comment from "../../components/blogs/Comment";
dayjs.extend(relativeTime);

export default function ShowBlog() {
  const id = useParams().id as string;
  const { blog, isLoading, error } = useGetOneBlog({ id: id });
  const { user: currentUser, isLogged } = useAuthContext();
  const [comment, setComment] = useState("");
  const { users: allUsers, isLoading: isUsersLoading } = useGetUsers();

  const user = blog?.authorId;
  if (error) {
    toast.error("An error occurred!, Please try again later.");
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let discussions: any[] | undefined = [];

  if (!isUsersLoading && !isLoading) {
    discussions = blog?.discussions.map((discussion, ind) => {
      const currentAuthor = allUsers?.find(
        (user) => user._id === discussion.author
      );
      return (
        <Comment
          key={ind}
          authorImage={`${currentAuthor?.profilePicture}`}
          authorName={`${currentAuthor?.firstName} ${currentAuthor?.lastName}`}
          comment={discussion.content}
          createdAt={discussion.createdAt}
        />
      );
    });
  }

  async function handleComment() {
    try {
      const { data } = await axios.post(
        `${apiUrl}/discussions/blog/${id}`,
        { content: comment },
        {
          headers: {
            Authorization: `Bearer ${currentUser?.token}`,
          },
        }
      );
      toast.success("Comment added successfully");
      setComment("");
      blog?.discussions.push(data);
    } catch (error) {
      toast.error("An error occurred!, Please try again later.");
    }
  }

  return !isLoading && blog ? (
    <article className="mx-16 md:mx-7 sm:mx-3 my-12 flex flex-col gap-8">
      <p className="font-bold text-5xl mb-6">{blog.title}</p>
      <section className="flex gap-6 items-center md:hidden group">
        <div className="relative">
          <div className="flex items-center gap-4 font-bold text-lg">
            <div className="w-11 h-11 rounded-full bg-white grid place-content-center text-black">
              <img
                src={user?.profilePicture}
                className="w-full h-full rounded-full"
                alt=""
              />
            </div>
            <div>
              <p>
                {user?.firstName} {user?.lastName}
              </p>
              <p className="font-normal text-base">
                {dayjs(blog.createdAt).fromNow()}
              </p>
            </div>
          </div>
        </div>
      </section>
      <img className="w-full h-96 object-cover" src={blog.coverImage} alt="" />
      <p className="text-xl">{blog.content}</p>
      {isLogged && (
        <section>
          <p className="font-bold text-3xl">Discussions</p>
          <div>
            <section className="flex gap-6 mt-12">
              <img
                src={currentUser?.profilePicture}
                className="w-12 h-12 object-cover rounded-full"
              />
              <textarea
                name="message"
                className="w-1/2 h-24 bg-bergeL/0 outline-none border border-bergeL rounded-xl p-4"
                placeholder="Write a comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </section>
            <button
              className="bg-bergeL text-black px-8 py-2 rounded-lg my-8"
              onClick={handleComment}
            >
              Share
            </button>
          </div>
          <div className="flex flex-col gap-6 w-2/3 mx-auto">
            {discussions && discussions.length ? discussions : null}
          </div>
        </section>
      )}
    </article>
  ) : (
    <LoadingSection />
  );
}
