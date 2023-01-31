import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function AddBook({ booksList, setBooks }) {
  
  const [ value, setValue ] = useState("")
  const [ value1, setValue1 ] = useState("")
  const [ value2, setValue2 ] = useState("")


  const letBook = () => {
    let book = {
      name:value, anons:value1, author: value2
    }
    setBooks([...booksList,book])
  }

    return(
    <div>
      <label>Введите название книги:
      <br></br><input value={value} onChange={event => setValue(event.target.value)}></input>
      </label><br></br>
      <label>Введите описание книги:
      <br></br> <input value={value1} onChange={event => setValue1(event.target.value)}></input>
      </label><br></br>
      <label>Введите автора книги:
      <br></br><input value={value2} onChange={event => setValue2(event.target.value)}></input>
        <button onClick={letBook}>Опубликовать</button><br></br></label>
      <nav>
      <Link to="/">Главная </Link> 
      <Link to="/about"> О нас</Link>
      </nav>
      </div>
      )
    }

export default AddBook

{/*By danek, sdelano 31.01.2023, Время 13:10*/}
