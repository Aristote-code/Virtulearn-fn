import { CreateBlogDto } from "../interfaces";
import axios from "axios";
import { apiUrl } from "./env";

export default async function createBlog({
  title,
  content,
  coverImage,
}: CreateBlogDto) {
  const token = localStorage.getItem("token");
  const { data } = await axios.post(
    `${apiUrl}/blogs`,
    {
      title,
      content,
      coverImage,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
}
