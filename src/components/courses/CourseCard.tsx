import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

interface CourseCardProps {
  title: string;
  coverImage: string;
  author: string;
  enrolledStudents: number;
  id: string;
  createdAt: string;
}

export default function CourseCard({
  title,
  coverImage,
  author,
  enrolledStudents,
  id,
  createdAt,
}: CourseCardProps) {
  return (
    <Link to={`/courses/${id}`} className="flex flex-col gap-1">
      <img
        className="h-48 w-full object-cover rounded-xl"
        src={coverImage}
        alt=""
      />
      <p className="font-bold text-2xl">{title}</p>
      <p className="">Created by {author}</p>
      <p className="font-bold text-lg">{enrolledStudents} students</p>
      <p className="font-bold">
        Free . <span className="font-normal">{dayjs(createdAt).fromNow()}</span>
      </p>
    </Link>
  );
}
