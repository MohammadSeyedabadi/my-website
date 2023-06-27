import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from '../components/Card'
import projectsList from '../data/projectsList'

export default function Projects() {
  const cards = projectsList.map((item) => {
    return <Card key={item.id} item={item} />
  })
  return (
    <>
      <main className="mt-5">
        <Row className="mb-5">
          <Col>
            <h1 className="heading fw-light display-3">
              Projects
            </h1>
          </Col>
        </Row>
        <Row xs={1} md={2} lg={3} className="gy-2 gy-md-3 gx-2 gx-md-3">
          {cards}
        </Row>
      </main>
    </>
  )
}
