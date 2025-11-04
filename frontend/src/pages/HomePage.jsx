import { Link } from "react-router";
import { Check, Code2Icon, MoveRightIcon, RocketIcon, Sparkles, User2, VideoIcon } from 'lucide-react';
import { SignInButton } from "@clerk/clerk-react";
export default function HomePage() {
  return (
    <>      <div className="max-w-[1440px] mx-auto my-0 p-0">
      <nav className="w-full flex justify-between items-center shadow-2xl  md:px-20 px-5 py-3 sticky">
        {/* Logo section */}
        <Link to="/"
          className="flex justify-center items-center cursor-pointer "
        >
          <Sparkles />
          <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-linear-90 from-green-950 to-green-500">Talent IQ</h3>
        </Link>
        {/* sign in option */}

        <div>
          <SignInButton className="btn btn-secondary rounded-md hover:border-dotted">Get Started </SignInButton>
        </div>
      </nav>

      {/* hero section */}
      <div className="flex flex-col lg:flex-row justify-between items-start w-full md:px-20 px-5">
        <div className="lg:w-[calc(100%/2)] w-full">
          <div className="bg-green-500 font-semibold text-sm rounded-2xl px-2 py-1 w-fit mt-5">
            <span ><RocketIcon className="inline-block" /> Real-time Collaboration</span>
          </div>
          <div>
            <h1 className="w-full sm:text-6xl text-4xl font-bold py-10 leading-12  sm:tracking-wider sm:leading-15 bg-linear-90 from-green-700 via-green-500 to-green-400 text-transparent bg-clip-text">Code Together, <br />  <span className="text-black ">Learn Together</span></h1>
          </div>
          <div>
            <p className="text-[23px] w-full">
              The ultimate platform for collaborative coding interviews and
              pair programming. Connect face-to-face, code in real-time, and
              ace your technical interviews.
            </p>
          </div>
          <div className="flex justify-around w-[calc(100%-(20px))] items-start gap-5 my-8">
            <div className="px-2 py-1 bg-green-200 w-full md:w-[calc(100%/3)] rounded-2xl text-[12px] sm:text-sm">
              <Check className="inline-block" /> <span>Live Video Chat</span>
            </div>
            <div className="px-2 py-1 bg-green-200 w-full md:w-[calc(100%/3)] rounded-2xl text-[12px] sm:text-sm">
              <Check className="inline-block" /> <span>Code Editor</span>
            </div>
            <div className="px-2 py-1 bg-green-200 w-full md:w-[calc(100%/3)] rounded-2xl text-[12px] sm:text-sm">
              <Check className="inline-block" /> <span>Multi-Language</span>
            </div>
          </div>
          <div className="mt-10 flex gap-5">
            <Link to={"/"} className="text-center">
              <button className="btn btn-primary bg-green-500 border-none md:text-xl  text-white rounded-2xl cursor-pointer ">Start Coding <MoveRightIcon /></button>
            </Link>
            <Link to={"/"} className="text-center">
              <button className="btn btn-primary  md:text-xl border-2 rounded-2xl cursor-pointer "><VideoIcon /> Watch Demo</button>
            </Link>
          </div>
          <div className="flex mt-9">
            <div className="bg-black w-fit px-3 rounded-l-2xl">
              <h2 className="text-green-300 md:text-5xl text-3xl font-semibold">10K+</h2>
              <span className="text-gray-400">Active Users</span>   
            </div>
            <div className="bg-black w-fit px-3 ">
              <h2 className="text-green-400 md:text-5xl text-3xl font-semibold">50K+</h2>
              <span className="text-gray-400">Sessions</span>
            </div>
            <div className="bg-black w-fit px-3 rounded-r-2xl">
              <h2 className="text-green-500 md:text-5xl text-3xl font-semibold">99.9%</h2>
              <span className="text-gray-400">Uptime</span>
            </div>
          </div>
        </div>
        <div className="lg:w-[calc(100%/2)] w-full">
          <img src="/hero.png" alt="Hero Image" className="w-full" />
        </div>
      </div>
      {/* Features */}
      <div className="flex flex-col justify-center items-center md:mt-40 px-2 md:px-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-4xl py-2 font-semibold ">Everything You Need to <span className="text-green-700">Succeed</span></h2>
          <p className="text-2xl max-w-[780px]">Powerful features designed to make your coding interviews seamless and
            productive</p>
        </div>
        <div className="flex flex-col md:flex-row  justify-between gap-3.5 my-10 w-full box-border">
          <div className="flex justify-center items-center flex-col border-2 rounded-lg py-5 w-full md:w-[calc(100%/3)]">
            <div className="bg-green-300 p-4 rounded-2xl">
              <VideoIcon className="text-green-800" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold py-3">HD Video Call</h3>
              <p className="px-2">Crystal clear video and audio for seamless
                communication during interviews</p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col border-2 rounded-lg py-5 w-full md:w-[calc(100%/3)]">
            <div className="bg-green-300 p-4 rounded-2xl">
              <Code2Icon className="text-green-800" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold py-3">Live Code Editor</h3>
              <p className="px-2">Collaborate in real-time with syntax highlighting and
                multiple language support</p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col border-2 rounded-lg py-5 w-full md:w-[calc(100%/3)]">
            <div className="bg-green-300 p-4 rounded-2xl">
              <User2 className="text-green-800" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold py-3">Easy Collaboration</h3>
              <p className="px-2">Share your screen, discuss solutions, and learn from
                each other in real-time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
