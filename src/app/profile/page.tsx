import AboutMe from "../components/aboutMe";
import Information from "../components/information";
import Projects from "../components/projects";

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-4 px-4 pb-8 text-center">
      <Information />

      <AboutMe />

      <Projects />
    </div>
  );
}
