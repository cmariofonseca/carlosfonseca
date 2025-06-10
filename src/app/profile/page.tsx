import Information from "../components/information";
import Projects from "../components/projects";

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 text-center">
      <Information />

      <Projects />
    </div>
  );
}
