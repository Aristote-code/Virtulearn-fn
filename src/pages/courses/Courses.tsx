import { Link } from "react-router-dom";
import CourseCard from "../../components/courses/CourseCard";
import useCourses from "../../hooks/useCourses";
import LoadingSection from "../../components/LoadingSection";

export default function CoursesPage() {
  const { courses, loading } = useCourses();
  const coursesCards = courses.map((course, ind) => (
    <CourseCard
      key={ind}
      title={course.title}
      coverImage={course.coverImage}
      author={course.authorId.firstName + " " + course.authorId.lastName}
      enrolledStudents={course.students.length}
      id={course._id}
      createdAt={course.createdAt}
    />
  ));
  return (
    <article className="px-16 md:px-6 sm:px-3 mb-12">
      <section className="flex justify-between items-center">
        <section className="flex flex-col gap-6 justify-center  w-1/2 my-12">
          <p className="font-bold text-6xl">Most Popular Courses</p>
          <p>
            Dive into the latest and greatest! Our "Most Popular Courses"
            feature the trending topics everyone is talking about. Elevate your
            skills with the hottest picks on VirtuLearn. Stay in the know, stay
            ahead.
          </p>
        </section>
        <Link
          to="/courses/add"
          className="text-xl px-8 py-2 rounded-xl bg-greenD font-semibold"
        >
          Add Course
        </Link>
      </section>
      {loading ? (
        <LoadingSection />
      ) : (
        <section className="grid grid-cols-3 gap-4">{coursesCards}</section>
      )}
    </article>
  );
}
