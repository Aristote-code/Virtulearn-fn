import MainLayout from "./components/MainLayout.jsx";
import AboutPage from "./pages/AboutPage.js";
import HomePage from "./pages/Home.jsx";
import Login from "./pages/auth/Login.js";
import NotFound from "./pages/NotFound.jsx";
import authLoader, { redirectLoader } from "./loaders/authLoader.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Signup from "./pages/auth/Signup.js";
import BlogPage from "./pages/blogs/BlogsPage.js";
import ContactPage from "./pages/Contact.js";
import CoursesPage from "./pages/courses/Courses.js";
import { Toaster } from "react-hot-toast";
import AddBlog from "./pages/blogs/AddBlog.js";
import AddCourse from "./pages/courses/AddCourse.js";
import Messages from "./pages/Messages.js";
import ShowBlog from "./pages/blogs/ShowBlog.js";
import ViewCourse from "./pages/courses/ViewCourse.js";
import ProfilePage from "./pages/auth/Profile.js";
import SettingsPage from "./pages/auth/Settings.js";
import LearnCourse from "./pages/courses/LearnCourse.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<Login />} loader={authLoader} />
        <Route path="signup" element={<Signup />} loader={authLoader} />
        <Route
          path="profile"
          element={<ProfilePage />}
          loader={redirectLoader}
        />
        <Route
          path="settings"
          element={<SettingsPage />}
          loader={redirectLoader}
        />
        <Route path="blogs" element={<BlogPage />} />
        <Route path="blogs/:id" element={<ShowBlog />} />
        <Route path="blogs/add" element={<AddBlog />} loader={redirectLoader} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route
          path="courses/:id"
          element={<ViewCourse />}
          loader={redirectLoader}
        />
        <Route
          path="courses/learn/:id"
          element={<LearnCourse />}
          loader={redirectLoader}
        />
        <Route
          path="/courses/add"
          element={<AddCourse />}
          loader={redirectLoader}
        />
        <Route path="messages" element={<Messages />} loader={redirectLoader} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Route>
  )
);
export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}
