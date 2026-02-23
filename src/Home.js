"use client"
import {React, useState} from "react"
import { HeroParallax } from "./components/ui/hero-parallax"
import { Meteors } from "./components/ui/meteors";
import { SiX, SiGithub, SiLinkedin, SiInstagram, SiGmail, SiIndeed } from "react-icons/si"
import SCad1 from "./images/SCad1.png";
import CaseShop from "./images/CaseShop.png";
import NCDocs from "./images/NCDocs.png";
import NCForum from "./images/NCForum2.png";
import BTD from "./images/BTD.png";
import { Computer } from "lucide-react";
import { Languages } from "lucide-react";
import { School } from "lucide-react";
import FooterMain from "./components/New-footer";
import { Link } from 'react-router-dom';

export default function Home() {
  const getCurrentYear = () => new Date().getFullYear()

    const [showNavbar, setShowNavbar] = useState(false)


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

  function handleShowNavbar(){
    setShowNavbar(!showNavbar)
  }


  return (
    <section>
    {/* Navbar */}
    <header className="bg-black border-b border-gray-500 top-0 right-0 left-0 z-50 fixed backdrop-blur-md">
        <div className=" mx-auto sm:px-6 lg:px-8 xl:px-12">
            <div className="flex items-center justify-between h-16 lg:h-[72px]">
                <div className="flex items-center flex-shrink-0">
                <Link class="flex items-center  no-underline hover:no-underline font-bold text-xl" href="/">
                  <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-500 m-10 md:m-0">W E 5 T</span>
                </Link>
                </div>

                <div className={`absolute opacity-1  border border-zinc-600 border-t-0 h-12   top-0  right-0 flex items-center  justify-around md:justify-center md:gap-8 px-10 w-full bg-zinc-950/90 backdrop-blur-sm ${showNavbar ? "translate-y-16 z-10 opacity-1 " : "translate-y-0 -z-10 opacity-0 lg:opacity-100"}
                 transition-all md:transition-none  ease-in-out

                  lg:relative lg:border-none lg:h-min lg:translate-y-0 lg:z-0 lg:px-10 lg:w-min lg:bg-transparent lg:backdrop-blur-0 lg:gap-0
                lg:flex lg:justify-center lg:space-x-10 xl:space-x-14 `}>
                    <Link to="/" title="" className="text-base font-medium text-gray-300  focus:text-white hover:text-white"> Home </Link>

                    <Link to="/about-me" title="" className="text-base font-medium text-gray-300  focus:text-white hover:text-white"> Experience </Link>

                    <Link to="mailto:we5t323214@gmail.com" title="Documentation" className="text-base font-medium text-gray-300  focus:text-white hover:text-white">Contact</Link>
                </div>

                <div className="flex items-center justify-end space-x-5">
                  {/* Button for show nav bar */}
                    <button onClick={handleShowNavbar} type="button" className="p-2 -m-2 text-white transition-all duration-200 lg:hidden hover:text-gray-200">
                        {!showNavbar ? 
                          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                          </svg>
                        :  
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x">
                            <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                          </svg>
                        }
                    </button>
                    

                    <div class="group relative">
                      <Link
                        to="https://github.com/We5t1"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="My GitHub"
                      >
                      
                      <button className='text-gray-300'>
                      <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" class="w-8 hover:scale-100 duration-200 hover:stroke-white m-10 md:m-0"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                      </button>
                      </Link>
                      <span class="absolute -top-14 left-[50%] -translate-x-[50%] 
                      z-20 origin-left scale-0 px-3 rounded-lg border 
                      border-white bg-white py-2 text-sm font-bold
                      shadow-md transition-all duration-300 ease-in-out 
                      group-hover:scale-100">GitHub<span>
                    </span></span>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div className="relative z-0">
    {/*Hero section*/}
    <HeroParallax products={products} />
    </div>
    
    {/*Feature section*/}
    <div className="flex items-center justify-center flex-col sm:flex py-8 bg-white sm:py-16 lg:py-20 xl:pt-32 xl:pb-44">
      <div className="text-center mb-8 items-center justify-center">
        <h1 className="text-3xl font-bold text-black sm:text-4xl xl:text-5xl xl:leading-tight">Education</h1>
      </div>
      <div className="text-center items-center justify-center">
        <p className="mb-8 text-base font-normal leading-7 text-gray-600 lg:max-w-md xl:pr-0">
        I am a quick learner, always self-motivated and I take initiative to learn beyond what's expected.
        </p>
      </div>
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
      <div className="bg-black p-4 rounded-md shadow-md max-w-xs text-center relative overflow-hidden">
          <h3 className="text-lg font-bold md:text-2xl mb-2 mt-4 bg-clip-text text-transparent bg-gradient-to-b from-green-500 to-yellow-500">COLLEGE</h3>
          <p className="text-neutral-500 tracking-tighter text-lg">
          ZIET <br /> Bachelor Degree
          <div className="flex justify-center p-4">
             <School className="text-neutral-500 h-40 w-40" />
              </div>
          </p>
          <div class="v ab bb dc bf cf">
            {/* <img class="zg zc" src={Card1} alt=""></img> */}
          </div>
          <Meteors number={10} />

        </div>

        {/*  Card 2 */}
        <div className="bg-black p-4 rounded-md shadow-md max-w-xs text-center relative overflow-x-hidden">
        <h3 className="text-lg font-bold md:text-2xl mb-2 mt-4 bg-clip-text text-transparent bg-gradient-to-b from-green-500 to-yellow-500">English Courses

        </h3>
          <p className="text-neutral-500  tracking-tighter text-lg">
              Gaudeamus <br /> C1 English level certificate
              <div className="flex justify-center p-4">
             <Languages className="text-neutral-500 h-40 w-40" />
              </div>
          </p>
          <div class="v ab bb dc bf cf ih wh">
          </div>
          <Meteors number={10} />
        </div>

        {/* Card 3 */}
        <div className="bg-black p-4 rounded-md shadow-md max-w-xs text-center relative overflow-hidden">

        <h3 className="text-lg font-bold md:text-2xl mb-2 mt-4 bg-clip-text text-transparent bg-gradient-to-b from-green-500 to-yellow-500">Coding Courses</h3>
          <p className="text-neutral-500 tracking-tighter text-lg">
          Code with Antonio <br /> JS Mastery
          <div className="flex justify-center p-4">
             <Computer className="text-neutral-500 h-40 w-40" />
          </div>
          </p>
          <Meteors number={10} />

        </div>
      </div>
    </div>

{/* Skillset */}
<div className="flex items-center justify-center flex-col py-8 bg-black sm:py-16 lg:py-20 xl:pt-32 xl:pb-44">
  <div className="text-center mb-12 items-center justify-center">
    <h1 className="text-4xl font-bold text-white sm:text-5xl xl:text-6xl xl:leading-tight">
      My evolving skillset<span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-500">*</span>
    </h1>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl w-full px-8">
    {/* Frontend Column */}
    <div className="min-w-[350px]">
      <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-500">
        Frontend
      </h3>
      <div className="space-y-4 text-gray-300 text-xl">
        <div className="flex justify-between">
          <span>Typescript</span>
          <span>State Management</span>
          <span>HTML</span>
        </div>
        <div className="flex justify-between">
          <span>React & Next.js</span>
          <span>Tailwind CSS</span>
          <span>JavaScript</span>
        </div>
        <div className="flex justify-between">
          <span>React-Native</span>
          <span>CSS</span>
          <span>And much more...</span>
        </div>
      </div>
    </div>

    {/* Backend Column */}
    <div className="min-w-[350px]">
      <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-500">
        Backend
      </h3>
      <div className="space-y-4 text-gray-300 text-xl">
        <div className="flex justify-between">
          <span>Node.js</span>
          <span>REST APIs</span>
          <span>NestJS</span>
        </div>
        <div className="flex justify-between">
          <span>Prisma</span>
          <span>PostgreSQL</span>
          <span>MySQL</span>
        </div>
        <div className="flex justify-between">
          <span>MongoDB</span>
          <span>GraphQL</span>
          <span>And way more...</span>
        </div>
      </div>
    </div>

    {/* Other Column */}
    <div className="min-w-[350px]">
      <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-500">
        Other
      </h3>
      <div className="space-y-4 text-gray-300 text-xl">
        <div className="flex justify-between">
          <span>Project management</span>
          <span>Docker</span>
          <span>GitHub</span>
        </div>
        <div className="flex justify-between">
          <span>Linux</span>
          <span>Documentation</span>
          <span>Android Dev</span>
        </div>
        <div className="flex justify-between">
          <span>Git</span>
          <span>Hosting</span>
          <span>And other...</span>
        </div>
      </div>
    </div>
  </div>
</div>
      <FooterMain />
</section>

  );
}

export const products = [
  {
    title: "Police CAD",
    link: "/about-me",
    thumbnail: SCad1
  },
  {
    title: "BTD Phone Shop",
    link: "/about-me",
    thumbnail: BTD
  },
  {
    title: "Code Documentation",
    link: "/about-me",
    thumbnail: NCDocs
  },

  {
    title: "Community Forum",
    link: "/about-me",
    thumbnail: NCForum
  },

  {
    title: "E-Shop",
    link: "/about-me",
    thumbnail: CaseShop
  },

  {
    title: "BTD Phone Shop",
    link: "/about-me",
    thumbnail: BTD
  },
  {
    title: "Community Forum",
    link: "/about-me",
    thumbnail: NCForum
  },
  {
    title: "E-Shop",
    link: "/about-me",
    thumbnail: CaseShop
  },
  {
    title: "Code Documentation",
    link: "/about-me",
    thumbnail: NCDocs
  },
  {
    title: "Police CAD",
    link: "/about-me",
    thumbnail: SCad1
  },
]
