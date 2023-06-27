import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import projectsList from '../data/projectsList'

export default function Mainpage() {

  const cards = projectsList.slice(0, 6).map((item) => {
    return <Card key={item.id} id={item.id} item={item} />
  })
  return (
    <main className="mt-5">
      <article>
        <Row>
          <Col sm={7}>
            <h1 className="heading fw-bold">
              Hey, I'm Mohammad!
            </h1>
            <p
              className="hero-description fs-5"
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
                className="heading fw-bold"
              >
                Projects
              </div>
              <Link
                to="/Projects"
                className="btn--1 fs-6"
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