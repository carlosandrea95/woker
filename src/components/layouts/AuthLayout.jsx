import { Outlet } from 'react-router-dom'
const AuthLayout = ({ props }) => {
  return (
    <div
      className={`min-h-screen ${
        localStorage.getItem('language') === 'es'
          ? 'bg-gradient-to-tl from-indigo-500 via-purple-500 to-pink-500'
          : 'bg-gradient-to-tl from-pink-500 via-purple-500 to-indigo-500'
      } flex items-center justify-center`}
    >
      <Outlet />
    </div>
  )
}
export default AuthLayout
