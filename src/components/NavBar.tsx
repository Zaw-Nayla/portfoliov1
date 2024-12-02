import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { close, menu } from "../assets";
import { navLinks } from "../data";

const Navbar = () => {
  const [active, setActive] = useState("root");
  const [toggle, setToggle] = useState(false);
  const [, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
              setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50% 0px'
      }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav
      className="w-full flex items-center bg-gradient-to-b from-black sm:bg-none p-8 sm:px-10 lg:px-14 sm:py-10 fixed z-40 pointer-events-none"
    >
      <div className='w-full flex justify-end items-start mx-auto'>
        <ul className='list-none hidden sm:flex flex-col gap-5'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`relative flex items-center ${active === nav.id ? "text-white" : "text-slate-500"
                } hover:text-white text-[12px] lg:text-[18px] font-bold pointer-events-auto cursor-pointer`}
              onClick={() => setActive(nav.id)}
            >
              {active === nav.id && (
                <div className="fixed rounded-sm md:right-5 lg:right-10 w-1 h-4 lg:h-6 bg-tertiary"></div>
              )}
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[16px] h-[16px] object-contain pointer-events-auto cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-4 absolute top-10 right-0  my-2 min-w-[100px] z-30 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[12px] 
                    ${active === nav.id ? "text-tertiary" : "text-secondary" }`}
                  onClick={() => setActive(nav.id)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;