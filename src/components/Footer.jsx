import React from "react";
import Log from "../assets/log.png";
function Footer() {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-pink-300 flex justify-between w-[70%] h-[200px] relative top-10 z-10 rounded-xl">
        <div className="text-3xl flex my-auto pl-40 w-[50%]">Book a demo</div>
        <div className="my-auto text-sm flex flex-col w-[50%] pr-36">
          <span>
            {" "}
            Our video output beats the likes of Google Vlogger, and at par with
            Microsoft’s VASA-1 & Alibaba’s EMO
          </span>
          <div className="h-10">
            <input
              type="email"
              className="h-10 rounded-md mx-2"
              placeholder="Email"
            />
            <button className="bg-black rounded-md text-white h-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-stone-50 h-56 w-full pt-20">
        <div className="flex flex-col border-b-2 border-slate-600 mx-20">
          <img className="text-white w-20 h-10 " src={Log} alt="" />
        </div>

        <footer className="bg-gray-900 text-white py-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
            {/* Usecase Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Usecase</h3>
              <ul className="space-y-2 text-sm">
                <li>Learning and Development</li>
                <li>Marketing Teams</li>
                <li>Personalised Videos</li>
                <li>Dubbing</li>
                <li>Customer Service</li>
                <li>Enterprise</li>
              </ul>
            </div>

            {/* Feature Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Feature</h3>
              <ul className="space-y-2 text-sm">
                <li>AI Avatars</li>
                <li>Video Dubbing</li>
                <li>AI Face Swap</li>
                <li>Customized Virtual Influencer</li>
                <li>Video Personalisation</li>
              </ul>
            </div>

            {/* Resource Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Resource</h3>
              <ul className="space-y-2 text-sm">
                <li>Blogs</li>
                <li>Support</li>
                <li>FAQ</li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>About us</li>
                <li>Contact</li>
                <li>Pricing</li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-10 border-t border-gray-700 pt-6 text-center">
            <p className="text-sm text-gray-400">Copyright © 2024 UnscriptAI</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
