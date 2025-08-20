import Information from "../components/layout/Information";
import AboutMe from "../components/layout/AboutMe";
import Projects from "../components/layout/Projects";

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-4 px-4 pb-8 text-center">
      <Information />

      <AboutMe />

      <Projects />
    </div>
  );
}
