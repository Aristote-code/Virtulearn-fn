import { FormEvent, useState } from "react";
import LoadingSpinner from "../../components/Loading";
import uploadImage from "../../utils/uploadImg";
import createBlog from "../../utils/createBlog";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export default function AddBlog() {
  const navigate = useNavigate();
  const [blogInfo, setBlogInfo] = useState({
    title: "",
    content: "",
  });
  const [image, setImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    title: false,
    content: false,
    image: false,
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      const coverImage = await uploadImage(image as File);
      await createBlog({
        title: blogInfo.title,
        content: blogInfo.content,
        coverImage,
      });
      toast.success("new blog added successfully!");
      navigate("/blogs");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  function validateForm() {
    if (!blogInfo.title) {
      setErrors({ ...errors, title: true });
      return false;
    }
    if (!blogInfo.content) {
      setErrors({ ...errors, content: true });
      return false;
    }
    if (!image) {
      setErrors({ ...errors, image: true });
      return false;
    }

    return true;
  }

  return (
    <article className="my-20">
      <form onSubmit={handleSubmit}>
        <article className="px-16 md:px-6 sm:px-3 mt-12">
          <section className="flex flex-col gap-4">
            <label className="font-bold text-lg" htmlFor="title">
              Title
            </label>
            <input
              className="border border-bergeL rounded-lg px-4 py-2 bg-bergeL/5 outline-none"
              type="text"
              name="title"
              id="title"
              value={blogInfo.title}
              onChange={(e) =>
                setBlogInfo({ ...blogInfo, title: e.target.value })
              }
            />
            {errors.title && <p className="text-red">Title is required</p>}
          </section>
          <section className="flex flex-col gap-4">
            <label className="font-bold text-lg" htmlFor="image">
              Cover Image
            </label>
            <input
              className="border border-bergeL rounded-lg px-4 py-2 bg-bergeL/5 outline-none"
              type="file"
              name="image"
              id="image"
              onChange={(e) => {
                if (e.target.files) {
                  setImage(e.target.files[0]);
                }
              }}
            />
            {errors.image && <p className="text-red">Image is required</p>}
          </section>
          <section className="flex flex-col gap-4 mt-4">
            <label className="font-bold text-lg" htmlFor="content">
              Content
            </label>
            <textarea
              className="border border-bergeL rounded-lg px-4 py-2 bg-bergeL/5 outline-none"
              name="content"
              id="content"
              cols={30}
              rows={10}
              value={blogInfo.content}
              onChange={(e) => {
                setBlogInfo({ ...blogInfo, content: e.target.value });
              }}
            ></textarea>
            {errors.content && <p className="text-red">Content is required</p>}
          </section>
          <button className="bg-bergeL text-black font-bold rounded-lg px-4 py-2 mt-4">
            {isLoading ? <LoadingSpinner /> : "Add Blog"}
          </button>
        </article>
      </form>
    </article>
  );
}
