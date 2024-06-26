import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function Toast() {
  return (
    <ToastContainer
      position="top-center"
      autoClose={4000}
      theme="light"
      newestOnTop={true}
      closeOnClick={true}
    />
  )
}

export default Toast
