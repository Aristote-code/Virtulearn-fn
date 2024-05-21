import axios from "axios";
import { useEffect, useState } from "react";
import { apiUrl } from "../utils/env";
import { UserDto } from "../interfaces";

export default function useGetUsers() {
  const [users, setUsers] = useState<UserDto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const { data } = await axios.get(`${apiUrl}/users/all`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(data);
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUsers();
  }, [token]);

  return { users, isLoading, error };
}
