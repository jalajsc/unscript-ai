import React from "react";
import ReactPlayer from "react-player/youtube";
import Com from "../assets/com.png";
import "../App.css";
function Home() {
  return (
    <div className="flex w-full items-center mx-auto flex-col bg-slate-100">
      <div className="text-7xl font-bold flex-col h-40 mx-40 mt-36">
        Create <span className="text-indigo-500">Professional Videos</span>
        <br /> in Minutes with AI Avatars
      </div>
      <div className="text-m text-gray-400">
        Produce life-like videos at scale in 140+ regional and global
        Languages—no filming setup or teams required
      </div>
      <div className="demo_email m-16 flex h-12">
        <input
          type="text"
          className="bg-transparent border-[1px] border-gray-300 rounded-lg h-full"
        />
        <button className="bg-[#0158F7] rounded-md mx-2 h-full w-full text-white font-medium px-4">
          Get a Demo
        </button>
      </div>
      <div className="text-xl bg-black">
        <ReactPlayer
          className="react-player h-full w-full rounded-xl"
          url="https://youtu.be/p5ID33gk3TE"
        />
      </div>
      <div className="flex-col justify-center items-center m-14">
        <span className="text-3xl font-bold mx-auto">
          Trusted by Over 10,000+ Customers Worldwide.
        </span>
        <img src={Com} alt="com" />
      </div>

      <div className="flex h-44 w-full px-60 m-10">
        <div>
          <div className="text-4xl">Minutes, not Hours.</div>
          <div className="text-lg text-slate-600">
            No need for lengthy processes like filming, editing, or
            storyboarding, content can be created in minutes by simply providing
            a script.
          </div>
        </div>
        <div className="bg-black w-full h-full"></div>
      </div>

      <div className="m-10 h-44 w-full px-60 flex">
        <div className="bg-slate-600 h-full w-full"></div>
        <div className="flex flex-col items-center mx-4 pl-4">
          <span className="text-4xl">80% Cost Reduction</span>
          <span className="text-lg">
            Eliminate the need for expensive equipment, location rentals, and
            professional videographer, reducing overall production costs.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
