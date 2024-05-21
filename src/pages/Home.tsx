import { useAuthContext } from "../../context/AuthContext";
import Blogs from "../components/blogs/Blogs";
import Hero2 from "../components/Hero2";
import Hero from "../components/HeroSection";
import Popular from "../components/Popular";
import Revol from "../components/Revol";

export default function HomePage() {
  const { isLogged } = useAuthContext();
  return (
    <article>
      {!isLogged && <Hero />}
      {!isLogged && <Hero2 />}
      <Popular />
      <Revol />
      <Blogs />
    </article>
  );
}
