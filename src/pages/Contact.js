import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Contact() {

  const [status, setStatus] = React.useState('Submit')
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    const { name, email, message } = e.target.elements
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    let response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(details),
    })
    setStatus('Submit')
    let result = await response.json()
    alert(result.status)
  }

  return (
    <main className="mt-5">
      <Row>
        <Col md={5}>
          <h1 className="heading fw-light display-3">
            Contacts
          </h1>
          <h2
            className="heading fw-light mt-5" 
          >
            Let's Talk
          </h2>

          <p
            className="hero-description fs-5 fw-light"
          >
            Do you have some big ideas and need help bringing them to fruition
            for your business? Then please reach out, we would love to hear more
            about you, your project and how we can help!
          </p>
        </Col>
        <Col md={7} className="d-flex justify-content-center">
          <div
            className="box mt-5 mt-md-0 p-4 p-md-5"
          >
            <form
              className="form--contact p-4 p-md-3"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="name"
                  className="form--label fs-5 fw-light"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="form--input fs-5 fw-light p-1 mb-3"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="form--label fs-5 fw-light"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="form--input fs-5 fw-light p-1 mb-3"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="form--label fs-5 fw-light"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="form--input fs-5 fw-light p-1 mb-3"
                  required
                />
              </div>
              <button
                type="submit"
                className="form--button fs-5 fw-light"
              >
                {status}
              </button>
            </form>
          </div>
        </Col>
      </Row>
    </main>
  )
}