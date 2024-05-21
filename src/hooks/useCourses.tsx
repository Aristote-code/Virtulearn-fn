import { useEffect, useState } from "react";
import { CourseDto } from "../interfaces";
import axios from "axios";
import { apiUrl } from "../utils/env";

export default function useCourses() {
  const [courses, setCourses] = useState<CourseDto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await axios.get<CourseDto[]>(`${apiUrl}/course`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCourses(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCourses();
  }, [token]);

  return { courses, loading, error };
}

export function useGetOneCourse(id: string) {
  const [course, setCourse] = useState<CourseDto | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const { data } = await axios.get<CourseDto>(`${apiUrl}/course/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCourse(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCourse();
  }, [token, id]);

  return { course, loading, error };
}
