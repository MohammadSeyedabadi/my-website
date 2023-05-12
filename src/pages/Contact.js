import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Contact({darkMode}) {

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
    <main className="mt-5 footer--spacer">
      <Row>
        <Col md={5}>
          <h1 className={`fw-bold ${darkMode ? 'heading-dark' : 'heading'}`}>
            Contacts
          </h1>
          <h2
            className={`fw-bold mt-5 ${darkMode ? 'heading-dark' : 'heading'}`}
          >
            Let's Talk
          </h2>

          <p
            className={`fs-5 ${
              darkMode ? 'hero-description-dark' : 'hero-description'
            }`}
          >
            Do you have some big ideas and need help bringing them to fruition
            for your business? Then please reach out, we would love to hear more
            about you, your project and how we can help!
          </p>
        </Col>
        <Col md={7} className="d-flex justify-content-center">
          <div
            className={`mt-5 mt-md-0 p-4 p-md-5 ${
              darkMode ? 'box-dark' : 'box'
            }`}
          >
            <form
              className={`p-4 p-md-3 ${
                darkMode ? 'form--contact-dark' : 'form--contact'
              }`}
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="name"
                  className={`fw-semibold ${
                    darkMode ? 'form--label-dark' : 'form--label'
                  }`}
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className={`fw-semibold p-1 mb-3 ${
                    darkMode ? 'form--input-dark' : 'form--input'
                  }`}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className={`fw-semibold ${
                    darkMode ? 'form--label-dark' : 'form--label'
                  }`}
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className={`fw-semibold p-1 mb-3 ${
                    darkMode ? 'form--input-dark' : 'form--input'
                  }`}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className={`fw-semibold ${
                    darkMode ? 'form--label-dark' : 'form--label'
                  }`}
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={`fw-semibold p-1 mb-3 ${
                    darkMode ? 'form--input-dark' : 'form--input'
                  }`}
                  required
                />
              </div>
              <button
                type="submit"
                className={`fw-semibold ${
                  darkMode ? 'form--button form--button-dark' : 'form--button'
                }`}
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