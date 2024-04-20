import { AiOutlineSearch } from "react-icons/ai"
import { MdLocationOn } from "react-icons/md"

function Input() {
  return (
    <div className="flex flex-col justify-center items-center my-6">
      <form
        action="/search"
        className="max-w-[480px] w-full px-4 relative focus:outline-none"
      >
        <div className="relative focus:outline-none">
          <input
            type="text"
            className="w-full border h-12 shadow p-4 pr-12 rounded-full dark:text-gray-800 dark:bg-gray-200 focus:outline-none"
            placeholder="search for city..."
          />
          <button
            type="submit"
            className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-sky-600 transition-colors duration-300 text-lg focus:outline-none"
          >
            <AiOutlineSearch />
          </button>
          <button
            type="button"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-sky-600 transition-colors duration-300 text-lg focus:outline-none"
          >
            <MdLocationOn />
          </button>
        </div>
      </form>
    </div>
  )
}

export default Input
