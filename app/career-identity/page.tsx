"use client"

import AppLayout from "@/components/layout/AppLayout"

export default function CareerIdentity() {
  return (
    <AppLayout>

      <h1 className="text-white text-6xl font-bold">
        Career Identity
      </h1>

      <p className="text-gray-400 text-xl mt-2">
        Discover your strongest engineering persona through AI analysis.
      </p>

      <div className="grid grid-cols-3 gap-6 mt-10">

        <div className="bg-[#121A36] rounded-3xl p-8">

          <h2 className="text-white text-3xl font-bold">
            🏗 Builder
          </h2>

          <p className="text-6xl text-blue-400 font-bold mt-6">
            84
          </p>

          <p className="text-gray-400 mt-6">
            Loves building products and shipping ideas quickly.
          </p>

        </div>

        <div className="bg-[#121A36] rounded-3xl p-8">

          <h2 className="text-white text-3xl font-bold">
            🔬 Researcher
          </h2>

          <p className="text-6xl text-green-400 font-bold mt-6">
            61
          </p>

          <p className="text-gray-400 mt-6">
            Enjoys deep technical exploration and solving hard problems.
          </p>

        </div>

        <div className="bg-[#121A36] rounded-3xl p-8">

          <h2 className="text-white text-3xl font-bold">
            👑 Leader
          </h2>

          <p className="text-6xl text-yellow-400 font-bold mt-6">
            58
          </p>

          <p className="text-gray-400 mt-6">
            Drives teams and creates impact through collaboration.
          </p>

        </div>

      </div>

    </AppLayout>
  )
}