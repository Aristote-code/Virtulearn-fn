import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextProps, UserDto } from "../src/interfaces";
import { redirect } from "react-router";

const AuthContext = createContext<AuthContextProps>({
  user: null,
  token: null,
  isLogged: false,
  login: ({ user, token }: { user: UserDto; token: string }) => {},
  logout: () => {},
});

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<UserDto | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLogged, setIsLogged] = useState<boolean>(false);

  async function login({ user, token }: { user: UserDto; token: string }) {
    setUser(user);
    setToken(token);
    setIsLogged(true);
    localStorage.setItem("token", token as string);
    localStorage.setItem("user", JSON.stringify(user));
  }

  async function logout() {
    setUser(null);
    setToken(null);
    setIsLogged(false);
    localStorage.removeItem("token");
    redirect("/");
  }

  useEffect(() => {
    async function getToken() {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user") || "");
      if (token && user) {
        setToken(token);
        setUser(user);
        setIsLogged(true);
      } else {
        setUser(null);
        setToken(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    }
    getToken();
  }, []);

  const values = { user, token, isLogged, login, logout };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuthContext() {
  return useContext(AuthContext);
}
