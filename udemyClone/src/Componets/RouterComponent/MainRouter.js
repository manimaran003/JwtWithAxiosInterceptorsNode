import {Routes,Route} from 'react-router-dom'
import React from 'react'
import Header from '../UI/Header'
import Login from '../UI/Login'
import HomePage from '../UI/HomePage'
import Signup from '../UI/Signup'
import TourPage from '../UI/TourPage'
import {AppBar,Toolbar} from '@mui/material'
import DrawerComponent from '../UI/DrawerComponent'
import FinalForm from '../UI/FinalForm'
const MainRouter=()=>{
    const drawerWidth=240
    return (
        <>
         <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`,background:"#ced4da",ml: `${drawerWidth}px` }}
      >
        <Toolbar>
         <Header/>
        </Toolbar>
      </AppBar>
        <DrawerComponent/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/tourPage" element={<TourPage/>}/>
            <Route path="/finalForm" element={<FinalForm/>}/>
        </Routes>
        </>
    )
}

export default MainRouter