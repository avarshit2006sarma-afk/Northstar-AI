import Sidebar from "./Sidebar"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="bg-[#050B22] min-h-screen flex">

      <Sidebar />

      <section className="flex-1 p-12 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </section>

    </main>
  )
}