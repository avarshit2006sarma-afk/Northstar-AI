"use client";

import AppLayout from "@/components/layout/AppLayout";

export default function Settings() {
  return (
    <AppLayout>

      <h1 className="text-white text-6xl font-bold">
        Settings
      </h1>

      <p className="text-gray-400 text-xl mt-2">
        Customize your Northstar experience.
      </p>

      <div className="grid grid-cols-2 gap-6 mt-10">

        <div className="bg-[#121A36] rounded-3xl p-8">

          <p className="text-gray-400">👤 Name</p>

          <h2 className="text-white text-4xl font-bold mt-3">
            Varshit
          </h2>

        </div>

        <div className="bg-[#121A36] rounded-3xl p-8">

          <p className="text-gray-400">🎯 Dream Company</p>

          <h2 className="text-blue-400 text-4xl font-bold mt-3">
            Microsoft
          </h2>

        </div>

        <div className="bg-[#121A36] rounded-3xl p-8">

          <p className="text-gray-400">🌙 Theme</p>

          <h2 className="text-white text-4xl font-bold mt-3">
            Dark Mode
          </h2>

        </div>

        <div className="bg-[#121A36] rounded-3xl p-8">

          <p className="text-gray-400">🔔 Notifications</p>

          <h2 className="text-green-400 text-4xl font-bold mt-3">
            Enabled
          </h2>

        </div>

        <div className="bg-[#121A36] rounded-3xl p-8">

          <p className="text-gray-400">📄 Resume</p>

          <h2 className="text-white text-4xl font-bold mt-3">
            Uploaded
          </h2>

        </div>

        <div className="bg-[#121A36] rounded-3xl p-8">

          <p className="text-gray-400">🔗 GitHub</p>

          <h2 className="text-green-400 text-4xl font-bold mt-3">
            Connected
          </h2>

        </div>

      </div>
      {/* Profile Completion */}

<div className="bg-[#121A36] rounded-3xl p-8 mt-8">

<h2 className="text-white text-4xl font-bold">

📈 Profile Completion

</h2>

<div className="w-full h-5 bg-[#09112d] rounded-full mt-8">

<div className="h-5 w-[87%] bg-blue-500 rounded-full"/>

</div>

<p className="text-green-400 text-3xl font-bold mt-4">

87%

</p>

<div className="grid grid-cols-2 gap-4 mt-8">

<div className="bg-[#09112d] p-4 rounded-xl text-green-400">

✅ Resume

</div>

<div className="bg-[#09112d] p-4 rounded-xl text-green-400">

✅ GitHub

</div>

<div className="bg-[#09112d] p-4 rounded-xl text-green-400">

✅ Projects

</div>

<div className="bg-[#09112d] p-4 rounded-xl text-yellow-400">

🟡 LinkedIn

</div>

<div className="bg-[#09112d] p-4 rounded-xl text-gray-400">

⬜ Internship

</div>

</div>

</div>
<div className="bg-[#121A36] rounded-3xl p-8 mt-8 border border-cyan-500/30">

  <h2 className="text-white text-4xl font-bold">
    🎖 Membership
  </h2>

  <h1 className="text-cyan-400 text-6xl font-bold mt-6">
    PRO
  </h1>

  <p className="text-gray-400 mt-4 text-xl">
    Resume AI • Recruiter AI • Career GPS • Unlimited Analysis
  </p>

</div>
{/* Quick Actions */}

<div className="grid grid-cols-4 gap-4 mt-8">

<button className="bg-blue-600 p-5 rounded-2xl text-white hover:scale-105 transition">

Upload Resume

</button>

<button className="bg-blue-600 p-5 rounded-2xl text-white hover:scale-105 transition">

Connect GitHub

</button>

<button className="bg-blue-600 p-5 rounded-2xl text-white hover:scale-105 transition">

Sync LinkedIn

</button>

<button className="bg-green-600 p-5 rounded-2xl text-white hover:scale-105 transition">

Run AI Analysis

</button>

</div>
<div className="grid grid-cols-2 gap-8 mt-8">

<div className="bg-[#121A36] rounded-3xl p-8">

<h2 className="text-white text-3xl font-bold">

🧠 AI Engine

</h2>

<p className="text-gray-300 mt-6 text-xl">

Northstar v2.1

</p>

<p className="text-green-400 mt-3">

Explainable AI Enabled

</p>

<p className="text-blue-400 mt-3">

Last Analysis Today

</p>

</div>

<div className="bg-[#121A36] rounded-3xl p-8">

<h2 className="text-white text-3xl font-bold">

📊 Account Stats

</h2>

<div className="mt-6 space-y-3 text-xl text-gray-300">

<p>Profile Views : 183</p>

<p>AI Analyses : 24</p>

<p>Career Plans : 7</p>

<p>Opportunities Tracked : 31</p>

</div>

</div>

</div>

      <div className="bg-[#121A36] rounded-3xl p-8 mt-8">

        <h2 className="text-white text-4xl font-bold">
          🤖 About Northstar
        </h2>
        <p className="text-blue-400 mt-3">
  Version 2.1 • AI Career Intelligence Platform
</p>

        <p className="text-gray-300 text-xl leading-10 mt-6">

          Northstar is an AI Career Intelligence Platform that helps
          students maximize their readiness for top software companies
          through explainable AI, personalized roadmaps, recruiter
          simulations, opportunity tracking, and intelligent coaching.

        </p>

      </div>
      <div className="mt-8 text-center">

  <p className="text-gray-500">
    Built with ❤️ by A. Varshit Sarma
  </p>

</div>

    </AppLayout>
  );
}