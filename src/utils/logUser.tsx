import axios from "axios";
import { apiUrl } from "./env";
import { UserDto } from "../interfaces";

export default async function logUser({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<UserDto> {
  const user = await axios.post(`${apiUrl}/auth/login`, { email, password });
  if (user.data.error) {
    throw new Error(user.data.error);
  }
  return user.data;
}
