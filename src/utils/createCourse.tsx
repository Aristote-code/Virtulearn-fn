import axios from "axios";
import { CreateCourseDto } from "../interfaces";
import { apiUrl } from "./env";

export default async function createCourse(newCourse: CreateCourseDto) {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.post(`${apiUrl}/course`, newCourse, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.data.error) {
      throw new Error(response.data.error);
    }
    return response.data;
  } catch (error) {
    throw new Error("Failed to create course");
  }
}
