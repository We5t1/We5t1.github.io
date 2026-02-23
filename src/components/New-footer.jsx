import { SiGithub, SiGmail, SiIndeed, SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";

 const footerLinks = [
    {
      name: "GitHub",
      link: "https://github.com/We5t1",
      icon: (
        <SiGithub
          aria-label="Follow me on GitHub"
          title="GitHub(We5t1)"
        />
      ),
      hover: " text-xl  text-gray-300 cursor-pointer hover:text-white"
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/vitaliy-keyl-956530317",
      icon: (
        <SiLinkedin
          aria-label="Follow me on LinkedIn"
          title="LinkedIn"
        />
      ),
      hover: " text-xl  text-gray-300 cursor-pointer hover:text-white"
    },
    {
      name: "Indeed",
      link: "https://profile.indeed.com/p/vitaliik-43f1399",
      icon: (
        <SiIndeed
          aria-label="Follow me on Indeed"
          title="Indeed"
        />
      ),
      hover: " text-xl text-gray-300 cursor-pointer hover:text-white"
    },
    {
      name: "Gmail",
      link: "mailto:we5t323214@gmail.com",
      icon: (
        <SiGmail
          aria-label="Mail me"
          title="Gmail"
        />
      ),
      hover: " text-xl  text-gray-300 cursor-pointer hover:text-white"
    }
  ]

  const footerdocsLinks = [
    {
      title: "More about me",
      child: [
        {
          name: "My Resume",
          link:
            "https://drive.google.com/file/d/1Q-fe4HxDrEC8dTuig9J3J3t6EjKk4-GT/view?usp=sharing"
        },
      ]
    }
  ]

  const footerServiceLinks = [
    {
      title: "Contact Me",
      child: [
        {
          name: "we5t323214@gmail.com",
          link: "mailto:we5t323214@gmail.com"
        },
      ]
    }
  ]


const FooterMain = () => {
    const getCurrentYear = () => new Date().getFullYear();

    return (
        <div>
    <div className="border-t border-gray-800 bg-black">
      <div className="mx-auto max-w-screen-xl pt-8 sm:pt-16 px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-4">
          <div className="text-center lg:text-left">
            <div className="flex h-10 items-center justify-center lg:justify-start text-white rounded-lg font-extrabold text-2xl">
              W E 5 T
            </div>
            <p className="mt-4 text-center text-gray-200 dark:text-gray-400 lg:text-left lg:text-lg">
             Portfolio website created by We5t using TS, TailwindCSS, React and other tools.
            </p>

            <div className="mt-6 flex justify-center lg:justify-start gap-4">
              {footerLinks.map(footerLink => (
                <li key={footerLink.link}>
                  <Link
                    to={footerLink.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={footerLink.hover}
                    aria-label={`footer link of ${footerLink.link}`}
                  >
                    {footerLink.icon}
                  </Link>
                </li>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto">
            <ul className="font-medium text-gray-200 pt-5 text-center lg:text-left">
              {footerdocsLinks.map((section, index) => (
                <div key={index}>
                  <h3 className="text-xl font-extrabold mb-4 text-gray-200">
                    {section.title}
                  </h3>
                  <ul>
                    {section.child.map((link, linkIndex) => (
                      <li key={linkIndex} className="pt-2">
                        <Link
                          to={link.link}
                          className="hover:text-gray-300 "
                          rel="noopener noreferrer"
                          target="_blank"
                          aria-label="footer docs link"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>

            <ul className="font-medium text-gray-200 text-center lg:text-left">
              {footerServiceLinks.map((section, index) => (
                <div key={index}>
                  <h3 className="text-xl font-extrabold mt-5 mb-4 text-gray-200">
                    {section.title}
                  </h3>
                  <ul>
                    {section.child.map((link, linkIndex) => (
                      <li key={linkIndex} className="pt-2">
                        <Link
                          to={link.link}
                          className="hover:text-gray-300  "
                          rel="noopener noreferrer"
                          target="_blank"
                          aria-label="footer service link"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
            <div className="mt-[25px] ">
              <div className="p-2 rounded-lg  mx-auto">
                <Link
                  to="https://github.com/We5t1"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub repository"
                >
                 <button
                    className="group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-neutral-900 px-10 py-4 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-sky-900 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse"
                  >
                    <svg
                      className="w-6 h-6 fill-neutral-50"
                      height="100"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 100 100"
                      width="100"
                      x="0"
                      xmlns="http://www.w3.org/2000/svg"
                      y="0"
                    >
                      <path
                        className="svg-fill-primary"
                        d="M50,1.23A50,50,0,0,0,34.2,98.68c2.5.46,3.41-1.09,3.41-2.41s0-4.33-.07-8.5c-13.91,3-16.84-6.71-16.84-6.71-2.28-5.77-5.55-7.31-5.55-7.31-4.54-3.1.34-3,.34-3,5,.35,7.66,5.15,7.66,5.15C27.61,83.5,34.85,81.3,37.7,80a10.72,10.72,0,0,1,3.17-6.69C29.77,72.07,18.1,67.78,18.1,48.62A19.34,19.34,0,0,1,23.25,35.2c-.52-1.26-2.23-6.34.49-13.23,0,0,4.19-1.34,13.75,5.13a47.18,47.18,0,0,1,25,0C72.07,20.63,76.26,22,76.26,22c2.72,6.89,1,12,.49,13.23a19.28,19.28,0,0,1,5.14,13.42c0,19.21-11.69,23.44-22.83,24.67,1.8,1.55,3.4,4.6,3.4,9.26,0,6.69-.06,12.08-.06,13.72,0,1.34.9,2.89,3.44,2.4A50,50,0,0,0,50,1.23Z"
                      ></path>
                    </svg>
                    ⭐GITHUB
                  </button>
 
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 dark:border-gray-800 text-center lg:text-center ">
          <p className="text-gray-200 mx-auto lg:mx-0">
            © Vitalii Keil {getCurrentYear()} All rights reserved
          </p>
        </div>
      </div>
    </div>
        </div>
    )
};

export default FooterMain;