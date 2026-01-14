"use client";

import Image from "next/image";
import { FaGlobe, FaTelegram, FaReact, FaMobileAlt, FaCode } from "react-icons/fa";

const teamMembers = [
  {
    name: "Thay Vanchhai",
    role: "Web Developer",
    image: "/app_icon.png",
    website: "https://vanchhai-thay-nine.vercel.app/",
    telegram: "https://t.me/Vanchhai2004",
  },
];

export default function AboutPage() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-400 tracking-tight">
            About Me & Khmer Learning
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Welcome! I’m Thay Vanchhai, a passionate web and mobile developer dedicated to building modern, functional, and beautiful applications.  
            Khmer Learning is a platform designed to help students master multiple subjects effectively.
          </p>
        </div>

        {/* Personal Introduction */}
        <div className="bg-gray-800 rounded-3xl p-10 shadow-2xl border border-gray-700 space-y-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto md:mx-0">
              <Image
                src="/app_icon.png"
                alt="Thay Vanchhai"
                width={192}
                height={192}
                className="rounded-xl object-cover shadow-lg"
              />
            </div>
            <div className="text-center md:text-left space-y-4">
              <h2 className="text-3xl font-bold text-yellow-400">Hello, I am Thay Vanchhai</h2>
              <p className="text-gray-300">
                I am a web designer & developer. My main technologies are <strong>React.js</strong>, <strong>Next.js</strong> for web, and <strong>Flutter</strong> for mobile applications.  
                I enjoy crafting modern user interfaces, functional apps, and solving complex problems.
              </p>

              {/* Skills */}
              <div className="flex justify-center md:justify-start gap-6 mt-2 text-indigo-400">
                <FaReact size={28} title="React.js" />
                <FaMobileAlt size={28} title="Flutter" />
                <FaCode size={28} title="Web Development" />
              </div>
            </div>
          </div>

          {/* Personal Info Table */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300 mt-6">
            <p><strong>Name:</strong> Thay Vanchhai</p>
            <p><strong>Email:</strong> vanchhaithay82@gmail.com</p>
            <p><strong>Phone:</strong> +855 87631748</p>
            <p><strong>Date of Birth:</strong> 15-Apr-2004</p>
            <p><strong>Nationality:</strong> Cambodian</p>
            <p><strong>Address:</strong> Phnom Penh, Cambodia</p>
            <p><strong>Interests:</strong> UI/UX Design, Web Development, Mobile Apps, Learning New Tech</p>
            <p><strong>Languages:</strong> Khmer, English</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6 mt-4 text-gray-400">
            <a href="https://vanchhai-thay-nine.vercel.app/" target="_blank" className="hover:text-indigo-400">
              <FaGlobe size={28} />
            </a>
            <a href="https://t.me/Vanchhai2004" target="_blank" className="hover:text-indigo-400">
              <FaTelegram size={28} />
            </a>
          </div>
        </div>

        {/* Team Section */}
        <div className="flex flex-col items-center space-y-8 text-center">
          <h2 className="text-2xl font-bold text-yellow-400">Developer</h2>

          <div className="flex flex-col items-center gap-10">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-700 transition-all transform hover:scale-105 hover:shadow-3xl text-center w-72 md:w-80 lg:w-96"
              >
                <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={192}
                    height={192}
                    className="rounded-xl object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-gray-400 mb-4">{member.role}</p>
                <div className="flex justify-center gap-6">
                  <a href={member.website} target="_blank" className="text-gray-400 hover:text-indigo-400">
                    <FaGlobe size={24} />
                  </a>
                  <a href={member.telegram} target="_blank" className="text-gray-400 hover:text-indigo-400">
                    <FaTelegram size={24} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
