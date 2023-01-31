import React, {useState} from "react";
import AddBook from "./pages/AddBook";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {

  const booksList = [
    {name:"React Books", anons:'Скоро xx.02.2023', author: 'Rayan Gosling'},
    {name:"Как создавался проект, Rave RP, как добиться результата", anons:"Скоро xx.05.2023", author: 'Danil Sadryev'},
    {name:"Russia", anons:"xx.03.2023", author: "Danil Sadryev"},
  ]

  const [ books, setBooks ] = useState(booksList)

  return(
  <Router>
    <Routes>
      <Route exact path="/" element={<Home booksList={books}/>}/>
      <Route exact path="/addbook" element={<AddBook booksList={books} setBooks = {setBooks}/>}/>
      <Route exact path="/about" element={<About/>}/>
    </Routes>
  </Router>
  
  )
}

export default App;

{/*By danek, sdelano 31.01.2023, Время 12:49*/}
