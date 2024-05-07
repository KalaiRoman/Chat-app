import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Signup, Singin } from '../pages/Pages'

function Routing() {
  return (
    <div>
        <Routes>
            <Route exact index path="/" element={<Singin/>}/>
            <Route exact  path="/signup" element={<Signup/>}/>
        </Routes>
    </div>
  )
}

export default Routing