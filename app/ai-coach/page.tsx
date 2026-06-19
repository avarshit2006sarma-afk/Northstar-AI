"use client";

import AppLayout from "@/components/layout/AppLayout";

export default function AICoach() {
  return (
    <AppLayout>

      <h1 className="text-white text-6xl font-bold">
        AI Coach
      </h1>

      <p className="text-gray-400 text-xl mt-2">
        Your personal AI mentor for career growth.
      </p>
      <div className="mt-10 bg-[#121A36] rounded-3xl p-8 border border-cyan-500/30">

  <h2 className="text-white text-4xl font-bold">
    💬 Ask Northstar AI
  </h2>

  <input
    placeholder="How can I improve my Microsoft readiness?"
    className="w-full mt-6 bg-[#0B1228] rounded-2xl p-5 text-white outline-none"
  />

  <button className="mt-5 bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-2xl text-white transition-all duration-300 hover:scale-105">
    Ask AI
  </button>

</div>

      {/* Today's Focus */}

      <div className="mt-10 bg-[#121A36] rounded-3xl p-10 border border-blue-500/30">

        <p className="text-gray-400 text-xl">
          🎯 Today's Focus
        </p>

        <h2 className="text-white text-5xl font-bold mt-4">
          Complete 2 LeetCode Medium Problems
        </h2>

        <button className="mt-8 bg-blue-500 px-8 py-3 rounded-2xl text-white hover:bg-blue-400 transition-all duration-300 hover:scale-105">
          Start Task
        </button>
        <div className="mt-8">

  <p className="text-gray-400">
    Estimated Completion
  </p>

  <p className="text-green-400 text-2xl font-bold mt-2">
    45 Minutes
  </p>

</div>

      </div>

      {/* Daily Missions */}

      <div className="mt-10 bg-[#121A36] rounded-3xl p-8">

        <h2 className="text-white text-4xl font-bold">
          📅 Daily Missions
        </h2>
        <div className="w-full bg-[#0B1228] h-3 rounded-full mt-6">

  <div className="bg-green-500 h-3 rounded-full w-1/4"/>

</div>

<p className="text-gray-400 mt-3">
  1 of 4 missions completed today
</p>

        <div className="space-y-4 mt-8">

          <div className="bg-[#0B1228] p-5 rounded-xl text-green-400">
            ✓ Solve 2 DSA Problems
          </div>

          <div className="bg-[#0B1228] p-5 rounded-xl text-white">
            ○ Update Resume
          </div>

          <div className="bg-[#0B1228] p-5 rounded-xl text-white">
            ○ Apply to 1 Internship
          </div>

          <div className="bg-[#0B1228] p-5 rounded-xl text-white">
            ○ Build 1 Feature
          </div>

        </div>

      </div>

      {/* AI Advice */}

      <div className="mt-10 bg-[#121A36] rounded-3xl p-8 border border-purple-500/30">

        <h2 className="text-white text-4xl font-bold">
          🤖 AI Advice
        </h2>
        <p className="text-cyan-400 mt-3">
  Generated using your current career profile.
</p>

        <p className="text-gray-300 text-2xl leading-relaxed mt-8">
          Your internship experience is currently limiting your profile.
          Focus on gaining practical exposure before learning another
          framework. Real-world projects will improve your readiness
          faster than additional certifications.
        </p>

      </div>
      <div className="mt-10 bg-[#121A36] rounded-3xl p-8 border border-green-500/30">

  <h2 className="text-white text-4xl font-bold">
    📊 AI Career Forecast
  </h2>

  <p className="text-gray-400 mt-2">
    Predicted readiness after completing key milestones.
  </p>

  <div className="space-y-6 mt-8">

    <div>

      <div className="flex justify-between">

        <span className="text-white">
          Current
        </span>

        <span className="text-green-400 font-bold">
          72%
        </span>

      </div>

      <div className="w-full bg-[#0B1228] h-3 rounded-full mt-2">

        <div className="bg-green-500 h-3 rounded-full w-[72%]" />

      </div>

    </div>

    <div>

      <div className="flex justify-between">

        <span className="text-white">
          After Internship
        </span>

        <span className="text-blue-400 font-bold">
          80%
        </span>

      </div>

      <div className="w-full bg-[#0B1228] h-3 rounded-full mt-2">

        <div className="bg-blue-500 h-3 rounded-full w-[80%]" />

      </div>

    </div>

    <div>

      <div className="flex justify-between">

        <span className="text-white">
          After DSA
        </span>

        <span className="text-purple-400 font-bold">
          86%
        </span>

      </div>

      <div className="w-full bg-[#0B1228] h-3 rounded-full mt-2">

        <div className="bg-purple-500 h-3 rounded-full w-[86%]" />

      </div>

    </div>

    <div>

      <div className="flex justify-between">

        <span className="text-white">
          Dream Company Ready
        </span>

        <span className="text-yellow-400 font-bold">
          94%
        </span>

      </div>

      <div className="w-full bg-[#0B1228] h-3 rounded-full mt-2">

        <div className="bg-yellow-400 h-3 rounded-full w-[94%]" />

      </div>

    </div>

  </div>

</div>

      {/* Bottom Grid */}

      <div className="grid grid-cols-2 gap-6 mt-10">

        <div className="bg-[#121A36] rounded-3xl p-8">

          <h2 className="text-white text-4xl font-bold">
            🎤 Mock Interview
          </h2>

          <p className="text-gray-400 mt-6">
            Question of the Day
          </p>

          <p className="text-white text-2xl mt-4">
            What is the difference between BFS and DFS?
          </p>
          <p className="text-yellow-400 mt-4">
  Difficulty • Medium
</p>

          <button className="mt-8 bg-blue-500 px-6 py-3 rounded-xl text-white">
            Reveal Answer
          </button>

        </div>

        <div className="bg-[#121A36] rounded-3xl p-8">

          <h2 className="text-white text-4xl font-bold">
            📈 Weekly Progress
          </h2>

          <div className="w-full bg-[#0B1228] h-5 rounded-full mt-8">

            <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-5 rounded-full w-4/5" />

          </div>

          <p className="text-white text-2xl mt-6">
            8 / 10 Tasks Completed
          </p>

          <p className="text-green-400 mt-2">
            Keep going 🚀
          </p>

        </div>

      </div>

      {/* Quote */}

      <div className="mt-10 bg-[#121A36] rounded-3xl p-8">

        <h2 className="text-white text-3xl font-bold">
          💡 Daily Motivation
        </h2>

        <p className="text-gray-300 text-2xl italic mt-6">
          "Small improvements every day compound into dream offers."
        </p>
        <p className="text-blue-400 mt-6">
  — Northstar AI Coach
</p>

      </div>

    </AppLayout>
  );
}