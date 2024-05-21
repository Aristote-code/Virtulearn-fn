import toast from "react-hot-toast";
import LoadingSection from "../../components/LoadingSection";
import BlogCard from "../../components/blogs/BlogCard";
import BlogGrid from "../../components/blogs/BlogGrid";
import BlogsHero from "../../components/blogs/Hero";
import TopPicks from "../../components/blogs/TopPicks";
import { useGetBlogs } from "../../hooks/useBlogs";

export default function BlogPage() {
  const { blogs, isLoading, error } = useGetBlogs();

  const blogCards = blogs.map((blog, ind) => (
    <BlogCard
      key={ind}
      title={blog.title}
      id={blog._id}
      image={blog.coverImage}
      description={blog.content}
    />
  ));

  if (error) {
    toast.error("An error occurred!, Please try again later.");
  }

  return (
    <article className="px-16 md:px-6 sm:px-3 mt-12">
      <BlogsHero />
      {isLoading ? (
        <LoadingSection />
      ) : (
        <section className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-14 mt-12">
          {blogCards}
        </section>
      )}
      <TopPicks />
      <BlogGrid />
    </article>
  );
}
