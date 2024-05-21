import { useParams } from "react-router";
import { useGetOneCourse } from "../../hooks/useCourses";
import LoadingSection from "../../components/LoadingSection";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default function LearnCourse() {
  const id = useParams<{ id: string }>().id;
  const { course, loading } = useGetOneCourse(id as string);
  const user = course?.authorId;
  console.log(course);

  return loading ? (
    <LoadingSection />
  ) : (
    <article className="mx-16 md:mx-7 sm:mx-3 my-12 flex flex-col gap-8">
      <p className="font-bold text-5xl mb-6">{course?.title}</p>
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
                {dayjs(course?.createdAt).fromNow()}
              </p>
            </div>
          </div>
        </div>
      </section>
      <img
        className="w-full h-96 object-cover"
        src={course?.coverImage}
        alt=""
      />
      <p className="font-bold text-3xl text-center">Chapters</p>
      <section>
        {course?.content.map((content, index) => (
          <div key={index} className="flex gap-4 flex-col">
            <p className="font-bold text-xl">{index + 1}.</p>
            <p className="text-xl">{content.message}</p>
            <iframe width="853" height="480" src={content.link}></iframe>
          </div>
        ))}
      </section>
    </article>
  );
}
