import React from 'react'
import { Link } from 'react-router-dom'

function Home(booksList) {
    return (
    <div>
        <h1>Мои любимые книжечки</h1>
    {
        booksList.booksList.map((item, bang) => (
          <div key = {bang}>
            <p>{item.name}</p>
            <p>{item.anons}</p>
            <p>{item.author}</p> <hr></hr>
          </div>
          ))
      } 
      <nav>
        <Link to="/addbook">Добавить книгу</Link>
          <br />
        <Link to="/about">О нас</Link>
    </nav>
      
    </div>
  )
}

export default Home