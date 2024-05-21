import { useEffect, useState } from "react";
import { apiUrl } from "../utils/env";
import axios from "axios";
import { BlogCardProps, BlogDto } from "../interfaces";

export function useGetBlogs() {
  const [blogs, setBlogs] = useState<BlogDto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const { data } = await axios.get(`${apiUrl}/blogs`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBlogs(data);
        setIsLoading(false);
      } catch (error) {
        setError("An error occurred. Please try again later.");
      }
    }
    fetchBlogs();
  }, [token]);

  return { blogs, isLoading, error };
}

export function useGetOneBlog({ id }: { id: string }) {
  const [blog, setBlog] = useState<BlogCardProps | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchBlog() {
      try {
        const { data } = await axios.get(`${apiUrl}/blogs/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBlog(data);
        setIsLoading(false);
      } catch (error) {
        setError("An error occurred. Please try again later.");
        setIsLoading(false);
      }
    }
    fetchBlog();
  }, [id, token]);

  return { blog, isLoading, error };
}
