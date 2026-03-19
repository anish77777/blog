import React, { useState } from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import conf from '../../conf/conf'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const authStatus = useSelector((state) => state.auth.status)
  const userData = useSelector((state) => state.auth.userData)
  const navigate = useNavigate()

  const isAdmin = userData ? (String(userData.email).toLowerCase() === String(conf.adminEmail).toLowerCase() || String(userData.email).toLowerCase() === "anish@gmail.com") : false;

  // those which are active are shown on dispaly   
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus && isAdmin,
    },
  ]
  return (
    <header className='py-3 shadow bg-gray-500 sticky top-0 z-50'>
      <Container>
        <nav className='flex items-center justify-between relative'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>

          {/* Hamburger Menu Icon */}
          <button
            className='lg:hidden block text-white focus:outline-none'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className='h-8 w-8'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              )}
            </svg>
          </button>

          {/* Navigation Links */}
          <ul
            className={`${isMenuOpen ? 'flex' : 'hidden'
              } lg:flex lg:flex-row flex-col lg:static absolute top-full right-0 lg:w-auto w-full bg-gray-500 lg:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0 items-center gap-2`}
          >
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name} className='w-full lg:w-auto text-center'>
                  <button
                    onClick={() => {
                      navigate(item.slug)
                      setIsMenuOpen(false)
                    }}
                    className='inline-block w-full lg:w-auto px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li className='w-full lg:w-auto text-center'>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
