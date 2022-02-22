import React from 'react'
//import Edit from './Pages/Edit'
import Login from './Pages/Login'
import { BrowserRouter , Switch , Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Edit from './Pages/Edit'
import Accordion from './Components2/Accordion'

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Login} ></Route>
    <Route exact path="/edit" component={Edit} ></Route>
    <Route exact path="/api" component={Accordion} ></Route>
    </Switch>
    </BrowserRouter>
     
    </div>
  )
}

export default App
