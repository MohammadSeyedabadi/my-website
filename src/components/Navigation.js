import React from 'react'
// import Image from 'react-bootstrap/Image'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function Navigation({darkMode, toggleDarkMode}) {

  return (
    <header
      className={`navigation ${darkMode ? 'nav-dark' : ''}`}
      id="navigation"
    >
      <nav className="nav nav--container d-flex align-items-center">
        <div className="">
          <Link to="/my-website" className="fw-semibold">
            {/* <span className="me-2">
              <Image
                src="../images/logo.png"
                fluid
                alt="logo"
                className="nav--img"
              />
            </span> */}
            <span
              className={`letter-spacing ${
                darkMode ? 'site--name-dark' : 'site--name'
              }`}
            >
              Mohammad Seyedabadi
            </span>
          </Link>
        </div>

        <div
          className={`nav--menu ${darkMode ? 'nav-dark' : ''}`}
          id="nav-menu"
        >
          <ul className="nav--list">
          <CustomLink
              to="/my-website"
              className={`fw-semibold nav--link home ${
                darkMode ? 'nav--link-dark' : ''
              }`}
            >
              <span className="nav__name">Home</span>
            </CustomLink>

            <CustomLink
              to="/about"
              className={`fw-semibold nav--link about ${
                darkMode ? 'nav--link-dark' : ''
              }`}
            >
              <span className="nav__name">About</span>
            </CustomLink>

            <CustomLink
              to="/Projects"
              className={`fw-semibold nav--link projects ${
                darkMode ? 'nav--link-dark' : ''
              }`}
            >
              <span className="nav__name">Projects</span>
            </CustomLink>

            <CustomLink
              to="/contact"
              className={`fw-semibold nav--link contact ${
                darkMode ? 'nav--link-dark' : ''
              }`}
            >
              <span className="nav__name">Contact</span>
            </CustomLink>

            <CustomLink
              to="/Blog"
              className={`fw-semibold nav--link blog ${
                darkMode ? 'nav--link-dark' : ''
              }`}
            >
              <span className="nav__name">Blog</span>
            </CustomLink>

            <li className="nav__item">
              <i
                className={`fs-4 cursor--style ${
                  darkMode ? 'bi bi-moon-stars-fill' : 'bi bi-sun'
                }`}
                onClick={toggleDarkMode}
              ></i>
            </li>
          </ul>
        </div>
      </nav>
      <hr className="my-0" />
    </header>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? 'active--link' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}