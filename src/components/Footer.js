import React from 'react'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'

export default function Footer({darkMode}) {

  return (
    <footer className="footer">
      <section>
        <Row className="text-center mb-3">
          <h2
            className={`fw-semibold fs-6 ${
              darkMode ? 'footer--color-dark' : 'footer--color'
            }`}
          >
            Thanks for reading!
          </h2>
          <p
            className={`fw-semibold ${
              darkMode ? 'footer--color-dark' : 'footer--color'
            }`}
          >
            © Mohammad Seyedabadi, 2023-Present
          </p>
        </Row>
        <Row>
          <nav className="d-flex justify-content-evenly footer--nav">
            <Link
              to="#"
              className={`fw-semibold fs-6 link--title ${
                darkMode
                  ? 'link--title-dark footer--color-dark'
                  : 'footer--color'
              }`}
            >
              Twitter
            </Link>
            <Link
              to="#"
              className={`fw-semibold fs-6 link--title ${
                darkMode
                  ? 'link--title-dark footer--color-dark'
                  : 'footer--color'
              }`}
            >
              GitHub
            </Link>
            <Link
              to="#"
              className={`fw-semibold fs-6 link--title ${
                darkMode
                  ? 'link--title-dark footer--color-dark'
                  : 'footer--color'
              }`}
            >
              LinkedIn
            </Link>
            <Link
              to="#"
              className={`fw-semibold fs-6 link--title ${
                darkMode
                  ? 'link--title-dark footer--color-dark'
                  : 'footer--color'
              }`}
            >
              Dribbble
            </Link>
          </nav>
        </Row>
      </section>
    </footer>
  )
}