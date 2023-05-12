import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import projectsList from '../data/projectsList'

export default function Mainpage({darkMode}) {

  const cards = projectsList.slice(0, 6).map((item) => {
    return <Card key={item.id} item={item} darkMode={darkMode} />
  })
  return (
    <main className="mt-5 footer--spacer">
      <article>
        <Row>
          <Col sm={7}>
            <h1 className={`fw-bold ${darkMode ? 'heading-dark' : 'heading'}`}>
              Hey, I'm Mohammad!
            </h1>
            <p
              className={`fs-5 ${
                darkMode ? 'hero-description-dark' : 'hero-description'
              }`}
            >
              Welcome to my digital garden. 🌱
              <br />
              <br />
              I'm a software developer in Chicago. I make open-source projects
              and write about code, design, and life. I like accordions,
              drawing, sci-fi, reading, and gaming.
            </p>
          </Col>
        </Row>
        <Row className="mt-5 mb-3">
          <Col sm={12}>
            <h2 className="d-flex justify-content-between align-items-center">
              <div
                className={`fw-bold ${darkMode ? 'heading-dark' : 'heading'}`}
              >
                Projects
              </div>
              <Link
                to="/Projects"
                className={`fs-6 see-more--btn ${
                  darkMode ? 'see-more--btn-dark' : ''
                }`}
              >
                View all
              </Link>
            </h2>
          </Col>
        </Row>
        <Row xs={1} md={2} lg={3} className="gy-2 gy-md-3 gx-2 gx-md-3">
          {cards}
        </Row>
      </article>
    </main>
  )
}