"use client"

import AppLayout from "@/components/layout/AppLayout"
import { student } from "@/lib/student"

import {
  getCareerIdentity,
  getPersonalitySummary,
} from "@/lib/careerEngine"

export default function CareerIdentity() {
  const identity = getCareerIdentity(student)
  const summary = getPersonalitySummary(identity)
  return (
    <AppLayout>

      <h1 className="text-white text-6xl font-bold">
        Career Identity
      </h1>

      <p className="text-gray-400 text-xl mt-2">
        Discover your strongest engineering persona through AI analysis.
      </p>

      <div className="grid grid-cols-2 gap-6 mt-10">

        <div className="bg-[#121A36] rounded-3xl p-8">

          <h2 className="text-white text-3xl font-bold">
            🏗 Builder
          </h2>

          <p className="text-6xl text-blue-400 font-bold mt-6">
            {identity.builder}
          </p>
          <div className="w-full bg-[#0B1228] h-3 rounded-full mt-6">

  <div
    className="bg-blue-500 h-3 rounded-full"
    style={{ width: `${identity.builder}%` }}
  />

</div>

          <p className="text-gray-400 mt-6">
            Loves building products and shipping ideas quickly.
          </p>

        </div>

        <div className="bg-[#121A36] rounded-3xl p-8">

          <h2 className="text-white text-3xl font-bold">
            🔬 Researcher
          </h2>

          <p className="text-6xl text-green-400 font-bold mt-6">
            {identity.researcher}
          </p>
          <div className="w-full bg-[#0B1228] h-3 rounded-full mt-6">

  <div
    className="bg-green-500 h-3 rounded-full"
    style={{ width: `${identity.researcher}%` }}
  />

</div>

          <p className="text-gray-400 mt-6">
            Enjoys deep technical exploration and solving hard problems.
          </p>

        </div>

        <div className="bg-[#121A36] rounded-3xl p-8">

          <h2 className="text-white text-3xl font-bold">
            👑 Leader
          </h2>

          <p className="text-6xl text-yellow-400 font-bold mt-6">
            {identity.leader}
          </p>
          <div className="w-full bg-[#0B1228] h-3 rounded-full mt-6">

  <div
    className="bg-yellow-500 h-3 rounded-full"
    style={{ width: `${identity.leader}%` }}
  />

</div>

          <p className="text-gray-400 mt-6">
            Drives teams and creates impact through collaboration.
          </p>

        </div>
        <div className="bg-[#121A36] rounded-3xl p-8">

  <h2 className="text-white text-3xl font-bold">
    🚀 Innovator
  </h2>

  <p className="text-6xl text-purple-400 font-bold mt-6">
    {identity.innovator}
  </p>
  <div className="w-full bg-[#0B1228] h-3 rounded-full mt-6">

  <div
    className="bg-purple-500 h-3 rounded-full"
    style={{ width: `${identity.innovator}%` }}
  />

</div>

  <p className="text-gray-400 mt-6">
    Combines creativity with technology to build impactful solutions.
  </p>

</div>

      </div>

    <div className="bg-[#121A36] rounded-3xl p-8 mt-8 border border-purple-500/30">

  <h2 className="text-white text-4xl font-bold">
    🤖 AI Personality Summary
  </h2>
  <p className="text-gray-300 text-xl mt-6 leading-10">
  {summary}
</p>

</div>
    </AppLayout>
  )
}