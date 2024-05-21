import { useAuthContext } from "../../../context/AuthContext";

export default function ProfilePage() {
  const { user } = useAuthContext();
  console.log(user);
  return (
    <article className="my-12 px-16 md:px-7 sm:px-3 flex flex-col gap-16">
      <section className="flex flex-col items-center gap-6">
        <div className="relative">
          <img
            src={user?.profilePicture}
            alt="profile picture"
            className="w-52 h-52 rounded-full"
          />
          <div className="absolute top-0 right-0 bg-purpleL px-4 py-1 rounded-2xl text-sm">
            {user?.isMentor ? "Mentor" : "Student"}
          </div>
        </div>
        <p className="font-bold text-3xl">
          {user?.firstName} {user?.lastName}
        </p>
        <p className="text-xl">{user?.email}</p>
      </section>
      {/* {user?.isMentor && (
        <section>
          <p className="font-bold text-3xl">My Courses</p>
          <section className="grid grid-cols-3 gap-6 my-6">
            <div className="w-full h-52 bg-yellowL"></div>
            <div className="w-full h-52 bg-yellowL"></div>
            <div className="w-full h-52 bg-yellowL"></div>
            <div className="w-full h-52 bg-yellowL"></div>
            <div className="w-full h-52 bg-yellowL"></div>
            <div className="w-full h-52 bg-yellowL"></div>
            <div className="w-full h-52 bg-yellowL"></div>
          </section>
        </section>
      )}
      <section>
        <p className="font-bold text-3xl">My Learning</p>
        <section className="grid grid-cols-3 gap-6 my-6">
          <div className="w-full h-52 bg-yellowL"></div>
          <div className="w-full h-52 bg-yellowL"></div>
          <div className="w-full h-52 bg-yellowL"></div>
          <div className="w-full h-52 bg-yellowL"></div>
          <div className="w-full h-52 bg-yellowL"></div>
          <div className="w-full h-52 bg-yellowL"></div>
          <div className="w-full h-52 bg-yellowL"></div>
        </section>
      </section> */}
    </article>
  );
}
