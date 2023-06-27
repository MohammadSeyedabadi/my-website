import React from 'react'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

export default function Card({item}) {
  return (
    <Col className="d-flex justify-content-center">
      <div
        className="project--wrapper"
      >
        <div>
          <div className="d-flex justify-content-between align-items-center mb-1">
            <time className="project--time">
              {item.time}
            </time>
            <div>
              <i
                className="star--icon bi bi-star me-1"
              ></i>
              <a
                href="#"
                className="star--count"
              >
                200
              </a>
            </div>
          </div>
          <Link
            to={item.title.link}
            className="link--title fw-semibold fs-5"
          >
            {item.title.title}
          </Link>
          <p className="project--p mt-2">
            {item.description}
          </p>
        </div>
        <div>
          {item.article && (
            <Link
              to={item.article}
              className="btn--1 me-2"
            >
              Article
            </Link>
          )}
          {item.demo && (
            <Link
              to={item.demo}
              className="btn--1"
            >
              Demo
            </Link>
          )}
        </div>
      </div>
    </Col>
  )
}