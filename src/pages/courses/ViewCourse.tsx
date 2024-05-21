import { useNavigate, useParams } from "react-router";
import { useGetOneCourse } from "../../hooks/useCourses";
import LoadingSection from "../../components/LoadingSection";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import toast from "react-hot-toast";
import axios from "axios";
import { apiUrl } from "../../utils/env";
import { useState } from "react";
import LoadingSpinner from "../../components/Loading";
dayjs.extend(relativeTime);

export default function ViewCourse() {
  const id = useParams<{ id: string }>().id;
  const { course, loading } = useGetOneCourse(id as string);
  const user = course?.authorId;
  const token = localStorage.getItem("token");
  const [isEnrolling, setIsEnrolling] = useState(false);
  const { user: currentUser } = JSON.parse(
    localStorage.getItem("user") || "{}"
  );
  const navigate = useNavigate();

  async function enrollCourse() {
    try {
      await axios.post(`${apiUrl}/course/enroll/${id}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Successfully enrolled course.");
      navigate(`/courses/learn/${id}`);
    } catch (error) {
      toast.error("Failed to enroll course, please try again later.");
    } finally {
      setIsEnrolling(false);
    }
  }

  if (!loading) {
    console.log(course?.students);
    if (course?.students.includes(currentUser?._id)) {
      console.log("sample");
      navigate(`/courses/learn/${id}`);
    }
  }

  return loading ? (
    <LoadingSection />
  ) : (
    <article className="mx-16 md:mx-7 sm:mx-3 my-12 flex flex-col gap-8">
      <p className="font-bold text-5xl mb-6">{course?.title}</p>
      <div className="flex justify-between items-center">
        <section className="flex gap-6 items-center group">
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
                  {dayjs(course?.createdAt).fromNow()}
                </p>
              </div>
            </div>
          </div>
        </section>
        <button
          className="bg-greenD rounded-xl py-2 px-8 font-bold"
          onClick={enrollCourse}
        >
          {isEnrolling ? <LoadingSpinner /> : "ENROLL NOW"}
        </button>
      </div>
      <img
        className="w-full h-96 object-cover"
        src={course?.coverImage}
        alt=""
      />
      <section className="flex gap-6">
        <div className="w-1/2 flex flex-col justify-between">
          <div>
            <p className="font-bold text-2xl mb-6">What you will learn</p>
            <div className="ml-10">
              {course?.content.map((content, index) => (
                <p key={index}>
                  {index + 1}. {content.title}
                </p>
              ))}
            </div>
          </div>
          <button
            className="bg-greenD w-full rounded-xl py-2 px-8 font-bold"
            onClick={enrollCourse}
          >
            {isEnrolling ? <LoadingSpinner /> : "ENROLL NOW"}
          </button>
        </div>
        <div className="w-1/2">
          <p className="font-bold text-2xl mb-6">Description</p>
          <p>{course?.description}</p>
          <p className="mt-6 font-bold">
            Created : {dayjs(course?.createdAt).fromNow()}
          </p>
          <p className="mt-6 font-bold">
            Current Students : {course?.students.length}
          </p>
        </div>
      </section>
    </article>
  );
}
