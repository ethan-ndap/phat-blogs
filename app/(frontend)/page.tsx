import BlogSection from "./components/blog-section";
import ProjectSection from "./components/project-section";

export default function Home() {
  return (
    <div className="container mx-auto font-sans p-8 pb-20  sm:p-20 ">
      <div className="relative">
        <h1 className="text-4xl font-bold tracking-tight">
          Software Engineer and
          <span className="block text-primary-600">AI/ML Engineer</span>
        </h1>
        <p className="mt-6 text-xl text-gray-700 leading-8">
          Place to showcases my professional contributions (Software, Deep
          Learning ...) and hobbies (running 1km - 100km, journaling, aussie
          bushcamp )
        </p>
        <div className=" flex mt-10 gap-4">
          <button className="px-8 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-500">
            About Me
          </button>
          <button className="px-8 py-3 rounded-lg border border-gray-600 font-medium hover:border-primary-500">
            Contact Me
          </button>
        </div>
        <ProjectSection></ProjectSection>
        <BlogSection></BlogSection>
      </div>
    </div>
  );
}
