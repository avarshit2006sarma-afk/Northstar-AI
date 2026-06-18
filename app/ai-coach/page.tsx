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

      {/* Today's Focus */}

      <div className="mt-10 bg-[#121A36] rounded-3xl p-10 border border-blue-500/30">

        <p className="text-gray-400 text-xl">
          🎯 Today's Focus
        </p>

        <h2 className="text-white text-5xl font-bold mt-4">
          Complete 2 LeetCode Medium Problems
        </h2>

        <button className="mt-8 bg-blue-500 px-8 py-3 rounded-2xl text-white hover:bg-blue-400 transition">
          Start Task
        </button>

      </div>

      {/* Daily Missions */}

      <div className="mt-10 bg-[#121A36] rounded-3xl p-8">

        <h2 className="text-white text-4xl font-bold">
          📅 Daily Missions
        </h2>

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

        <p className="text-gray-300 text-2xl leading-relaxed mt-8">
          Your internship experience is currently limiting your profile.
          Focus on gaining practical exposure before learning another
          framework. Real-world projects will improve your readiness
          faster than additional certifications.
        </p>

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

          <button className="mt-8 bg-blue-500 px-6 py-3 rounded-xl text-white">
            Reveal Answer
          </button>

        </div>

        <div className="bg-[#121A36] rounded-3xl p-8">

          <h2 className="text-white text-4xl font-bold">
            📈 Weekly Progress
          </h2>

          <div className="w-full bg-[#0B1228] h-5 rounded-full mt-8">

            <div className="bg-blue-500 h-5 rounded-full w-4/5" />

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

      </div>

    </AppLayout>
  );
}