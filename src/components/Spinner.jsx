const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative h-16 w-16">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-sky-600 absolute"></div>
        <img
          src="/icon.png"
          alt="Logo"
          className="h-6 absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  )
}

export default Spinner
