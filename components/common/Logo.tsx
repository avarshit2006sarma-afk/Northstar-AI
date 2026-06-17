export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-3 w-3 rounded-full bg-yellow-400"></div>

      <div className="flex flex-col">
        <span className="text-white text-2xl font-bold">
          Northstar
        </span>

        <span className="text-gray-400 text-sm">
          AI Career Intelligence
        </span>
      </div>
    </div>
  );
}