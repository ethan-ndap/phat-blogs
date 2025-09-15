import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-primary-500 bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto py-2 p-8 md:p-12 lg:p-20">
        <Link
          href={"/"}
          className="text-2xl md:text-3xl text-white font-normal"
        >
          Phat Blog
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            <li key="projects">
              <Link
                href="#projects"
                className="hover:text-slate-200 text-primary-50"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#blog"
                className="hover:text-slate-200 text-primary-50"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
