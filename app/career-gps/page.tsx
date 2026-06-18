"use client";

import AppLayout from "@/components/layout/AppLayout";

const roadmap = [
  {
    task: "Complete a Software Internship",
    gain: "+8%",
    time: "4 Weeks",
  },
  {
    task: "Solve 100 LeetCode Problems",
    gain: "+6%",
    time: "3 Weeks",
  },
  {
    task: "Build a Full Stack Project",
    gain: "+5%",
    time: "3 Weeks",
  },
  {
    task: "Optimize Resume & LinkedIn",
    gain: "+3%",
    time: "2 Days",
  },
];

export default function CareerGPS() {
  return (
    <AppLayout>

      <h1 className="text-white text-6xl font-bold">
        Career GPS
      </h1>

      <p className="text-gray-400 text-xl mt-2">
        AI-generated roadmap personalized for your dream career.
      </p>

      {/* Destination */}

      <div className="mt-10 bg-[#121A36] rounded-3xl p-10 border border-blue-500/30">

        <p className="text-gray-400 text-xl">
          🎯 Destination
        </p>

        <h2 className="text-white text-5xl font-bold mt-3">
          Microsoft Software Engineer
        </h2>

        <div className="flex justify-between mt-8">

          <div>

            <p className="text-gray-400">
              Current Readiness
            </p>

            <h3 className="text-green-400 text-5xl font-bold mt-2">
              72%
            </h3>

          </div>

          <div className="text-right">

            <p className="text-gray-400">
              Potential
            </p>

            <h3 className="text-blue-400 text-5xl font-bold mt-2">
              94%
            </h3>

          </div>

        </div>

      </div>
      <div className="mt-12 bg-[#121A36] rounded-3xl p-8 border border-green-500/30">

  <p className="text-gray-400 text-xl">
    📍 Current Position
  </p>

  <h2 className="text-white text-5xl font-bold mt-3">
    You are here
  </h2>

  <p className="text-green-400 text-3xl font-bold mt-6">
    72% Ready
  </p>

  <p className="text-gray-400 mt-4 text-lg">
    You're already ahead of many candidates. The roadmap below shows the fastest path to maximize your hiring potential.
  </p>

</div>

      {/* Timeline */}

      <div className="mt-8">

        {roadmap.map((step, index) => (

          <div
            key={index}
            className="flex items-start gap-8"
          >
            {/* Timeline */}

            <div className="flex flex-col items-center">

              <div className="w-5 h-5 rounded-full bg-blue-500 shadow-lg shadow-blue-500/60" />

              {index !== roadmap.length - 1 && (
                <div className="w-1 h-32 bg-blue-500/40 mt-2" />
              )}

            </div>

            {/* Card */}

            <div className="flex-1 bg-[#121A36] rounded-3xl p-8 mb-8 hover:scale-[1.01] transition-all duration-300">

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-gray-400 text-lg">
                    Step {index + 1}
                  </p>

                  <h2 className="text-white text-3xl font-bold mt-2">
                    {step.task}
                  </h2>
                  <div className="flex gap-3 mt-5">

  <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
    High Priority
  </span>

  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
    Medium Difficulty
  </span>

</div>

                </div>

                <div className="text-right">

                  <p className="text-green-400 text-4xl font-bold">
                    {step.gain}
                  </p>

                  <p className="text-gray-400 mt-2">
                    Estimated {step.time}
                  </p>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>
      <div className="mt-10 bg-[#121A36] rounded-3xl p-8 border border-purple-500/30">

  <h2 className="text-white text-4xl font-bold">
    🤖 AI Insight
  </h2>

  <p className="text-gray-300 text-xl mt-6 leading-10">
    Completing an internship is currently your highest-return action.
    Based on our hiring model, practical industry experience contributes
    more to your overall readiness than improving already strong areas.
    Focus on high-impact actions first to maximize your hiring potential.
  </p>

</div>

      {/* Bottom Stats */}

      <div className="grid grid-cols-2 gap-6 mt-6">

        <div className="bg-[#121A36] rounded-3xl p-8">

          <p className="text-gray-400 text-xl">
            Estimated Timeline
          </p>

          <h2 className="text-white text-5xl font-bold mt-4">
            10 Weeks
          </h2>

        </div>

        <div className="bg-[#121A36] rounded-3xl p-8">

          <p className="text-gray-400 text-xl">
            Expected Readiness
          </p>

          <h2 className="text-green-400 text-5xl font-bold mt-4">
            94%
          </h2>

        </div>

        <div className="bg-[#121A36] rounded-3xl p-8">

          <p className="text-gray-400 text-xl">
            Confidence
          </p>

          <h2 className="text-blue-400 text-5xl font-bold mt-4">
            High
          </h2>

        </div>
        <div className="bg-[#121A36] rounded-3xl p-8">

  <p className="text-gray-400 text-xl">
    Daily Effort
  </p>

  <h2 className="text-orange-400 text-5xl font-bold mt-4">
    3 hrs/day
  </h2>

</div>

      </div>

    </AppLayout>
  );
}