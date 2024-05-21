import { Outlet, useLocation } from "react-router";
import NavBar from "./Nav";
import Footer from "./Footer";

export default function MainLayout() {
  const location = useLocation();
  const isOnMessages = location.pathname === "/messages";
  return (
    <article>
      <section>
        <NavBar />
      </section>
      <Outlet />
      {!isOnMessages && <Footer />}
    </article>
  );
}
