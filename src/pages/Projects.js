import React from 'react'
import Card from '../components/Card'
import projectsList from '../data/projectsList'

export default function Projects({ darkMode }) {
  const cards = projectsList.map((item) => {
    return <Card key={item.id} item={item} darkMode={darkMode} />
  })
  return (
    <>
      <main className="mt-5">
        <div className="row mb-5">
          <div className="col-12">
            <h1 className={`fw-bold ${darkMode ? 'heading-dark' : 'heading'}`}>
              Projects
            </h1>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-2 gy-md-3 gx-2 gx-md-3">
          {cards}
        </div>
      </main>
    </>
  )
}
