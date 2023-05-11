import React from 'react'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

export default function Card(props) {
  let darkMode = props.darkMode

  return (
    <Col className="d-flex justify-content-center">
      <div
        className={`project--wrapper ${
          darkMode ? 'project--wrapper-dark' : ''
        }`}
      >
        <div>
          <div className="d-flex justify-content-between align-items-center mb-1">
            <time className={darkMode ? 'project--time-dark' : 'project--time'}>
              {props.item.time}
            </time>
            <div>
              <i
                className={`bi bi-star me-1 ${
                  darkMode ? 'star--icon-dark' : 'star--icon'
                }`}
              ></i>
              <a
                href="#"
                className={`star--count ${darkMode ? 'star--count-dark' : ''}`}
              >
                200
              </a>
            </div>
          </div>
          <Link
            to={props.item.title.link}
            className={`fw-semibold fs-5 link--title ${
              darkMode ? 'link--title-dark' : ''
            }`}
          >
            {props.item.title.title}
          </Link>
          <p className={`mt-2 ${darkMode ? 'project--p-dark' : 'project--p'}`}>
            {props.item.description}
          </p>
        </div>
        <div>
          {props.item.article && (
            <Link
              to={props.item.article}
              className={`me-2 see-more--btn card--btn-dark-light ${
                darkMode ? 'see-more--btn-dark' : ''
              }`}
            >
              Article
            </Link>
          )}
          {props.item.demo && (
            <Link
              to={props.item.demo}
              className={`see-more--btn card--btn-dark-light ${
                darkMode ? 'see-more--btn-dark' : ''
              }`}
            >
              Demo
            </Link>
          )}
        </div>
      </div>
    </Col>
  )
}