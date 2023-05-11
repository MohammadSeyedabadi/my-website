import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Picture from '../images/Picture.jpg'
import { Link } from 'react-router-dom'

export default function About(props) {
  let darkMode = props.darkMode

  return (
    <main className="mt-5 footer--spacer">
      <article>
        <Row>
          <Col>
            <h1
              className={
                darkMode
                  ? 'text-center text-lg-start fw-bold mb-5 heading-dark'
                  : 'text-center text-lg-start fw-bold mb-5 heading'
              }
            >
              About me
            </h1>
          </Col>
        </Row>
        <Row className="d-flex align-items-center gx-0 mb-md-4">
          <Col lg={2} className="d-flex justify-content-center mb-5 mb-lg-0">
            <Image
              src={Picture}
              fluid
              alt="a picture of me"
              className="picture"
            />
          </Col>
          <Col lg={9} className="mb-3">
            <h1
              className={
                darkMode
                  ? 'fw-semibold fs-2 heading-dark'
                  : 'fw-semibold fs-2 heading'
              }
            >
              I'm Mohammad. I'm a product manager and data scientist.
            </h1>
          </Col>
        </Row>
        <Row>
          <Col lg={7}>
            <p
              className={
                darkMode
                  ? 'fs-5 hero-description-dark'
                  : 'fs-5 hero-description'
              }
            >
              Speaking of last names, if mine hasn't already betrayed me, I was
              originally born in Armenia, a beautiful country nestled between
              Europe, Asia, and a bunch of biblically old mountains. You can
              almost spot it on a world map if you squint hard enough.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={7}>
            <p
              className={
                darkMode
                  ? 'fs-5 hero-description-dark'
                  : 'fs-5 hero-description'
              }
            >
              Speaking of last names, if mine hasn't already betrayed me, I was
              originally born in Armenia, a beautiful country nestled between
              Europe, Asia, and a bunch of biblically old mountains. You can
              almost spot it on a world map if you squint hard enough.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={7}>
            <p
              className={
                darkMode
                  ? 'fs-5 hero-description-dark'
                  : 'fs-5 hero-description'
              }
            >
              Speaking of last names, if mine hasn't already betrayed me, I was
              originally born in Armenia, a beautiful country nestled between
              Europe, Asia, and a bunch of biblically old mountains. You can
              almost spot it on a world map if you squint hard enough.
            </p>
          </Col>
        </Row>
        <h2 id="work-experience" className="mt-4">
          <a
            href="#work-experience"
            className={
              darkMode ? 'link--title link--title-dark' : 'link--title'
            }
          >
            Work Experience
          </a>
        </h2>
        <Row>
          <Col lg={7}>
            <p
              className={
                darkMode
                  ? 'fs-5 hero-description-dark'
                  : 'fs-5 hero-description'
              }
            >
              Speaking of last names, if mine hasn't already betrayed me, I was
              originally born in Armenia, a beautiful country nestled between
              Europe, Asia, and a bunch of biblically old mountains. You can
              almost spot it on a world map if you squint hard enough.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={7}>
            <p
              className={
                darkMode
                  ? 'fs-5 hero-description-dark'
                  : 'fs-5 hero-description'
              }
            >
              I won't bore you too much with my work history; that's what my CV,
              Github and LinkedIn are for. you could also check out the{' '}
              <Link
                to="/Projects"
                className={
                  darkMode ? 'article--p-a article--p-a-dark' : 'article--p-a'
                }
              >
                projects
              </Link>{' '}
              page to see a highlight of my open-source work, and the{' '}
              <Link
                to="/Blog"
                className={
                  darkMode ? 'article--p-a article--p-a-dark' : 'article--p-a'
                }
              >
                blog
              </Link>{' '}
              for my tutorials and more.
            </p>
          </Col>
        </Row>
        <Row>
          <ul>
            <li className="mb-3">
              <Link
                to="#"
                className={
                  darkMode
                    ? 'work--link work--link-dark fw-semibold'
                    : 'work--link fw-semibold'
                }
              >
                Download CV
              </Link>
            </li>
            <li className="mb-3">
              <Link
                to="#"
                className={
                  darkMode
                    ? 'work--link work--link-dark fw-semibold'
                    : 'work--link fw-semibold'
                }
              >
                Github
              </Link>
            </li>
            <li className="mb-3">
              <Link
                to="#"
                className={
                  darkMode
                    ? 'work--link work--link-dark fw-semibold'
                    : 'work--link fw-semibold'
                }
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </Row>
        <h2 id="hobbies-and-interests" className="mt-4">
          <a
            href="#hobbies-and-interests"
            className={
              darkMode ? 'link--title link--title-dark' : 'link--title'
            }
          >
            Hobbies and Interests
          </a>
        </h2>
        <Row>
          <Col lg={7}>
            <p
              className={
                darkMode
                  ? 'fs-5 hero-description-dark'
                  : 'fs-5 hero-description'
              }
            >
              Outside of work, I enjoy learning new things and writing on my
              blog, where I publish software development tutorials and the
              occasional essay. My passion for writing motivated me to create
              this website in the first place—it's my own little corner on the
              web where I'm free to write to my heart's content. I'm also a big
              believer in learning by teaching, and my blog gives me a place
              where I can do that.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={7}>
            <p
              className={
                darkMode
                  ? 'fs-5 hero-description-dark'
                  : 'fs-5 hero-description'
              }
            >
              When I'm not writing, you'll find me praising till I'm hollow. I'm
              a die-hard Soulsborne fan—I love the challenging gameplay,
              intricate lore, jolly co-operation, and community inside jokes
              that the series is so well known for. But I also like other video
              games: shooters, RPGs, roguelikes, card games, platformers, you
              name it. I was practically raised by a generation of browser Flash
              games—may they rest in peace—and an unhealthy amount of (Old
              School) Runescape, and these experiences with video games have
              shaped my interests and personality to this day. Some games have
              left such a lasting impression on me that I've written about them.
            </p>
            <p
              className={
                darkMode
                  ? 'fs-5 hero-description-dark'
                  : 'fs-5 hero-description'
              }
            >
              I also enjoy listening to music—mainly rock, folk, indie, and
              certain genres of metal. But I like to keep an open mind in case I
              stumble upon something new that I happen to like. Some of my
              favorite artists include Lana Del Rey, Radiohead, Arctic Monkeys,
              GY!BE, and lots of other great bands that I'd list here if I
              weren't pressed for space.
            </p>
            <p
              className={
                darkMode
                  ? 'fs-5 hero-description-dark'
                  : 'fs-5 hero-description'
              }
            >
              At one point, I was obsessed with drawing (and pretty good at it,
              too!). But with time, I found myself preoccupied with so many
              other things that I simply couldn't find the time to draw. Lately,
              my interest in art has resurfaced in the colorful world of
              front-end development—I love working with CSS to bring designs to
              life on the canvas that is the web. Sometimes, I'll also create
              CSS art as a substitute for the real thing, either as a challenge
              or just for fun.
            </p>
          </Col>
        </Row>
      </article>
    </main>
  )
}