import LoadingSpinner from "./LoadingSpinner";
export default function Spinner() {
  return (
    <div
      role="status"
      className="flex h-screen flex-col items-center justify-center"
    >
      <LoadingSpinner />
      <span className="not-sr-only text-white">Loading...</span>
    </div>
  );
}
