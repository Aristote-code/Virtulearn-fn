import { redirect } from "react-router";

export default function authLoader() {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  if (user && token) {
    return redirect("/");
  }
  return null;
}

export function redirectLoader() {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  if (!user && !token) {
    return redirect("/login");
  }
  return null;
}
