import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import MainRouter from './Componets/RouterComponent/MainRouter'
const App=()=>{
  return (
    <>
    <BrowserRouter>
    <MainRouter/>
    </BrowserRouter>
    </>
  )
}
export default App
