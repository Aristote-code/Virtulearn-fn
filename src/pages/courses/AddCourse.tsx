import { useState } from "react";
import { Content, CreateCourseDto } from "../../interfaces";
import { Except } from "type-fest";
import LoadingSpinner from "../../components/Loading";
import toast from "react-hot-toast";
import createCourse from "../../utils/createCourse";
import uploadImage from "../../utils/uploadImg";
import { useNavigate } from "react-router";

export default function AddCourse() {
  const navigate = useNavigate();
  const [course, setCourse] = useState<
    Except<CreateCourseDto, "content" | "coverImage">
  >({
    title: "",
    description: "",
  });
  const [content, setContent] = useState<Content>({
    message: "",
    title: "",
    link: "",
  });
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({
    title: false,
    description: false,
    coverImage: false,
    contentTitle: false,
    contentDescription: false,
    videoLink: false,
  });

  async function handleCreateCourse(e: React.FormEvent) {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);

    const newCourse: CreateCourseDto = {
      title: course.title,
      description: course.description,
      coverImage: "",
      content: [content],
    };
    try {
      const image = await uploadImage(coverImage as File);
      newCourse.coverImage = image;
      await createCourse(newCourse);
      toast.success("Course successffully created");
      navigate("/courses");
    } catch (error) {
      toast.error("Failed to create course, Try Again!");
    } finally {
      setIsLoading(false);
    }
  }

  function validateForm() {
    if (!course.title) {
      setFormErrors({ ...formErrors, title: true });
      return false;
    }
    if (!course.description) {
      setFormErrors({ ...formErrors, description: true });
      return false;
    }
    if (!coverImage) {
      setFormErrors({ ...formErrors, coverImage: true });
      return false;
    }
    if (!content.title) {
      setFormErrors({ ...formErrors, contentTitle: true });
      return false;
    }
    if (!content.link) {
      setFormErrors({ ...formErrors, contentDescription: true });
      return false;
    }
    if (!content.link) {
      setFormErrors({ ...formErrors, videoLink: true });
      return false;
    }
    // transform video link  to embed link
    // check if video has 'v=' if not  after check if it has /
    // if it has / split by / else split by v=
    let videoId = "";
    if (content.link.includes("v=")) {
      videoId = content.link.split("v=")[1];
    } else {
      videoId = content.link.split("/").pop() as string;
    }
    content.link = `https://www.youtube.com/embed/${videoId}`;

    return true;
  }

  return (
    <article className="px-16 md:px-6 sm:px-3 w-4/5 mx-auto sm:w-full">
      <form onSubmit={handleCreateCourse}>
        <section className="flex flex-col gap-6 justify-center  w-1/2 my-12 border-b pb-4">
          <p className="font-bold text-6xl">Add Course</p>
          <p>
            Fill in the details below to add a new course to the VirtuLearn
            platform.
          </p>
        </section>
        <section>
          <p className="font-bold text-3xl mb-8">Course Details</p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-lg">
                Course Title
                <span className="text-red">*</span>
              </label>
              <input
                type="text"
                placeholder="Course Title"
                className="py-2 px-4 rounded-lg bg-greenL/0 outline-none border border-bergeL/50"
                value={course.title}
                onChange={(e) =>
                  setCourse({ ...course, title: e.target.value })
                }
                required
              />
              {formErrors.title && (
                <p className="text-red">Title is required</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-lg">
                Course Description
                <span className="text-red">*</span>
              </label>
              <textarea
                placeholder="Course Description"
                className="py-2 px-4 rounded-lg bg-greenL/0 outline-none border border-bergeL/50"
                value={course.description}
                onChange={(e) =>
                  setCourse({ ...course, description: e.target.value })
                }
                required
              />
              {formErrors.description && (
                <p className="text-red">Description is required</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-lg">
                Cover Image
                <span className="text-red">*</span>
              </label>
              <input
                type="file"
                className="py-2 px-4 rounded-lg bg-greenL/0 outline-none border border-bergeL/50"
                onChange={(e) => setCoverImage(e.target.files?.[0] || null)}
                required
              />
              {formErrors.coverImage && (
                <p className="text-red">Cover Image is required</p>
              )}
            </div>
          </div>
        </section>
        <section>
          <p className="font-bold text-3xl my-8">Course Content</p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-lg">
                Content Title
                <span className="text-red">*</span>
              </label>
              <input
                type="text"
                placeholder="Content Title"
                className="py-2 px-4 rounded-lg bg-greenL/0 outline-none border border-bergeL/50"
                value={content.title}
                onChange={(e) =>
                  setContent({ ...content, title: e.target.value })
                }
                required
              />
              {formErrors.contentTitle && (
                <p className="text-red">Content Title is required</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-lg">
                Content Description
                <span className="text-red">*</span>
              </label>
              <textarea
                placeholder="Content Description"
                className="py-2 px-4 rounded-lg bg-greenL/0 outline-none border border-bergeL/50"
                value={content.message}
                onChange={(e) =>
                  setContent({ ...content, message: e.target.value })
                }
                required
              />
              {formErrors.contentDescription && (
                <p className="text-red">Content Description is required</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-lg">
                Video Link
                <span className="text-red">*</span>
              </label>
              <input
                type="text"
                placeholder="Video Link"
                className="py-2 px-4 rounded-lg bg-greenL/0 outline-none border border-bergeL/50"
                value={content.link}
                onChange={(e) =>
                  setContent({ ...content, link: e.target.value })
                }
                required
              />
              {formErrors.videoLink && (
                <p className="text-red">Video Link is required</p>
              )}
            </div>
          </div>
        </section>

        <button className="text-xl px-8 py-2 rounded-xl bg-greenD font-semibold">
          {isLoading ? <LoadingSpinner /> : "Add Course"}
        </button>
      </form>
    </article>
  );
}
