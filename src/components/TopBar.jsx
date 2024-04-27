import { FaGithub } from "react-icons/fa"

function TopBar() {
  return (
    <div className="flex items-center justify-between h-8 bg-white pl-4 pr-4">
      <div className="flex items-center">
        <img src="/icon.png" alt="Logo" className="h-6" />
        <span className="ml-1  font-bold text-sky-600">Weather Radar</span>
      </div>
      <a
        href="https://github.com/pamood/weather-app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-600 flex items-center text-sm font-medium hover:text-slate-700"
      >
        <FaGithub className="mr-1" />
        View on GitHub
      </a>
    </div>
  )
}

export default TopBar
