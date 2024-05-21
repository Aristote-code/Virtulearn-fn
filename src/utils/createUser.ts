import { CreateUserDto } from "../interfaces";
import axios from "axios";
import { apiUrl } from "./env";

export default async function createUser(data: CreateUserDto) {
  const user = await axios.post(`${apiUrl}/auth/signup`, data);
  if (user.data.error) {
    throw new Error(user.data.error);
  }
}
