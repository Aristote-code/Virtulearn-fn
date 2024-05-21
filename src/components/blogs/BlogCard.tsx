import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  id: string;
}

export default function BlogCard({
  title,
  description,
  image,
  id,
}: BlogCardProps) {
  return (
    <article className="w-full flex flex-col gap-4">
      <img className="w-full h-60 object-cover rounded-xl" src={image} alt="" />
      <p className="font-bold text-xl">{title}</p>
      <p className="border-b pb-4 border-white">
        {description.slice(1, 200)}...
      </p>
      <p>3 days Ago</p>
      <Link
        to={`/blogs/${id}`}
        className="border border-white py-2 font-bold rounded-xl text-center"
      >
        Read More
      </Link>
    </article>
  );
}
