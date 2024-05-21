import Loading from "react-loading";

export default function LoadingSection() {
  return (
    <section className="w-full h-80 grid place-content-center">
      <Loading type="spin" color="#FFEBCB" width={70} height={70} />
    </section>
  );
}
