"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  {
    name: "Dashboard",
    href: "/",
  },
  {
    name: "Career Identity",
    href: "/career-identity",
  },
  {
    name: "Recruiter Simulator",
    href: "/recruiter",
  },
  {
    name: "Career GPS",
    href: "/career-gps",
  },
  {
    name: "Opportunity Radar",
    href: "/opportunity-radar",
  },
  {
    name: "AI Coach",
    href: "/ai-coach",
  },
  {
    name: "Progress",
    href: "/progress",
  },
  {
    name: "Settings",
    href: "/settings",
  },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-72 bg-[#111933] p-8 flex flex-col h-screen sticky top-0">

      <div>

        <h1 className="text-white text-3xl font-bold">
          ⭐ Northstar
        </h1>

        <p className="text-gray-400 mt-2 text-sm">
          AI Career Intelligence Platform
        </p>

      </div>

      <nav className="mt-10 space-y-3">

        {links.map((link) => (
          <Link key={link.href} href={link.href}>

            <div
              className={`w-full rounded-xl py-3 px-4 transition-all duration-300 cursor-pointer ${
                pathname === link.href
                  ? "bg-[#243465] text-white"
                  : "text-gray-300 hover:bg-[#243465] hover:text-white"
              }`}
            >
              {link.name}
            </div>

          </Link>
        ))}

      </nav>

      <div className="mt-auto flex justify-center">

        <div className="w-12 h-12 rounded-full bg-black border border-gray-700 flex items-center justify-center">

          <span className="text-white font-bold">
            N
          </span>

        </div>

      </div>

    </aside>
  )
}