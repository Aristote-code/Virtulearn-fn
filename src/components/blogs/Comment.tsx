import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

interface CommentProps {
  authorName: string;
  authorImage: string;
  comment: string;
  createdAt: string;
}

export default function Comment({
  authorName,
  authorImage,
  comment,
  createdAt,
}: CommentProps) {
  return (
    <article className="w-full border-b border-bergeL/50 pb-4">
      <section className="flex gap-4 items-center">
        <img
          src={authorImage}
          className="w-12 h-12 object-cover rounded-full"
          alt=""
        />
        <div>
          <p className="font-bold">{authorName}</p>
          <p className="text-sm">{dayjs(createdAt).fromNow()}</p>
        </div>
      </section>
      <p className="ml-16 mt-4">{comment}</p>
    </article>
  );
}
