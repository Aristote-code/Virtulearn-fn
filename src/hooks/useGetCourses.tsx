import { useEffect, useState } from "react";

export default function useGetCourses() {
  const [courses, setCourses] = useState<[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {}, []);
}

export function useGetCoursesByUserId(userId: string) {
  const [courses, setCourses] = useState<[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {}, []);
}
