import { useEffect, useState } from "react";
import LoadingSpinner from "../assets/LoadingSpinner";
import Spinner from "../assets/Spinner";
import dayjs from "dayjs";
import PostCard from "../components/PostCard";

export default function Feeds() {
  const [allPosts, setAllPosts] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const { displayName, image: userImage, username, _id: userId } = user;

  const [postData, setPostData] = useState({ text: "", mood: "normal" });
  const [formError, setFormError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const posts = allPosts.map((post) => (
    <PostCard
      key={post._id}
      authorName={post.username}
      authorImage={post.authorImg}
      commentsArr={post.comments}
      postImage={post.image}
      likes={post.likes ? post.likes : 0}
      text={post.text}
      mood={post.mood}
      time={post.time}
      id={post._id}
    />
  ));

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffleArray(posts);

  // Example usage:
  const myArray = [1, 2, 3, 4, 5];
  shuffleArray(myArray);
  console.log(myArray);

  function handleFormChange(e) {
    setFormError(false);
    setPostData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handlePosting(e) {
    e.preventDefault();
    const postInfo = {
      author: username,
      username: displayName,
      authorId: userId,
      authorImg: userImage,
      text: postData.text,
      time: dayjs(),
      mood: postData.mood,
    };
    if (!postData.text) {
      setFormError(true);
    } else {
      setIsLoading(true);
      const formData = new URLSearchParams();
      for (const [key, value] of Object.entries(postInfo)) {
        formData.append(key, value);
      }
      const response = await fetch("https://mind-wave.onrender.com/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      });
      const postData = await response.json();
      setIsLoading(false);
      if (response.status === 200) {
        console.log(postData);
        window.location.reload();
      } else {
        setIsLoading(false);
      }
    }
  }

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://mind-wave.onrender.com/post");
      const posts = await response.json();
      setAllPosts(posts);
    }
    getData();
  }, []);

  return (
    <article>
      <section className="py-8 px-4 flex gap-4 w-full border-b border-light-200">
        <img
          className="w-12 h-12 md:w-10 md:h-10 rounded-full object-cover"
          src={userImage}
          alt=""
        />
        <form className="w-full">
          {formError && <p className="text-red-700">Please type something</p>}
          <input
            className="placeholder:text-xl text-light-200 bg-transparent py-2 w-full active:bg-transparent focus:bg-transparent outline-none"
            type="text"
            placeholder="What's on your mind today ?"
            name="text"
            value={postData.post}
            onChange={(e) => handleFormChange(e)}
          />
          <div className="w-full flex justify-between items-center mt-4 sm:flex-col sm:items-start gap-4">
            <select
              name="mood"
              className="bg-transparent px-4 py-2 border rounded-lg"
              onChange={(e) => handleFormChange(e)}
            >
              <option className="bg-light-200 text-dark-200" value="normal">
                Whats Your Mood today ?
              </option>
              <option className="bg-light-200 text-dark-200" value="happy">
                Happy
              </option>
              <option className="bg-light-200 text-dark-200" value="mad">
                Mad
              </option>
              <option className="bg-light-200 text-dark-200" value="depressed">
                Depressed
              </option>
              <option className="bg-light-200 text-dark-200" value="suprissed">
                Suprised
              </option>
              <option className="bg-light-200 text-dark-200" value="broken">
                Broken
              </option>
              <option
                className="bg-light-200 text-dark-200"
                value="celebration"
              >
                Celebrating
              </option>
            </select>
            <button
              className="bg-dark-100 px-8 py-2 text-dark-200 text-xl font-semibold rounded-xl"
              onClick={handlePosting}
            >
              {isLoading ? <LoadingSpinner /> : "Post"}
            </button>
          </div>
        </form>
      </section>
      <section>
        {allPosts.length === 0 ? (
          <Spinner />
        ) : (
          <section className="px-12 py-6 md:px-4">{posts}</section>
        )}
      </section>
    </article>
  );
}
