import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

export default function NavBar() {
  const { isLogged, user, logout } = useAuthContext();

  function handleLogout() {
    logout();
  }

  return (
    <article className=" px-16 md:px-6 sm:px-3 py-4 border-b border-white/65">
      <article className="flex justify-between items-center mb-4">
        <Link to="/">
          <img className="w-52" src="/logo.png" alt="main logo" />
        </Link>
        {isLogged ? (
          <section className="flex gap-6 items-center md:hidden">
            <Link to="/blogs" className="font-bold text-lg">
              Blogs
            </Link>
            <Link to="/messages" className="font-bold text-lg">
              <img src="/message.png" className="w-5" alt="" />
            </Link>
            <div className="relative group">
              <div className="flex items-center gap-4 font-bold text-lg border-l border-white pl-6">
                <div className="w-11 h-11 rounded-full bg-white grid place-content-center text-black">
                  <img
                    src={user?.profilePicture}
                    className="w-full h-full rounded-full"
                    alt=""
                  />
                </div>
                <p>
                  {user?.firstName} {user?.lastName}
                </p>
                <img src="/down.png" className="w-6" alt="" />
              </div>
              <aside className="absolute top-full right-0 w-96 rounded-xl  bg-white text-black px-4 py-2 font-bold hidden hover:block group-hover:block">
                <div className="border-b border-black pb-2 flex flex-col gap-2">
                  <Link
                    to="/profile"
                    className="hover:text-purpleL py-2 hover:bg-black/15"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="hover:text-purpleL py-2 hover:bg-black/15"
                  >
                    Settings
                  </Link>
                </div>
                <div className="border-b border-black pb-2 flex flex-col gap-2">
                  <Link
                    to="/messages"
                    className="hover:text-purpleL py-2 hover:bg-black/15"
                  >
                    My Messages
                  </Link>
                  <Link
                    to="/courses"
                    className="hover:text-purpleL py-2 hover:bg-black/15"
                  >
                    My Learning
                  </Link>
                  <Link
                    to="/blogs"
                    className="hover:text-purpleL py-2 hover:bg-black/15"
                  >
                    My Blogs
                  </Link>
                  <Link
                    to="/contact"
                    className="hover:text-purpleL py-2 hover:bg-black/15"
                  >
                    Get Help
                  </Link>
                </div>

                <button
                  onClick={handleLogout}
                  className="hover:text-purpleL py-2"
                >
                  Logout
                </button>
              </aside>
            </div>
          </section>
        ) : (
          <section className="flex gap-4 items-center md:hidden">
            <Link to="about">About</Link>
            <Link to="courses">Courses</Link>
            <Link to="blogs">Blogs</Link>
            <Link to="contact">Contact</Link>
            <Link
              className="border-2 border-bergeL text-bergeL rounded-full px-6 py-2 font-bold"
              to="login"
            >
              Login
            </Link>
            <Link
              className="px-10 bg-bergeL text-black py-2 rounded-full font-bold"
              to="signup"
            >
              Get Started
            </Link>
          </section>
        )}
      </article>
      {isLogged && (
        <section className="flex gap-5 text-lg">
          <Link to="/">Home</Link>
          <Link to="/courses">My Learning</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/messages">Messages</Link>
        </section>
      )}
    </article>
  );
}
