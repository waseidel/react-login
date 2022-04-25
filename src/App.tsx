import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Components
import Admin from './Layouts/Admin'
import Auth from './Layouts/Auth'

const App = () => {
  return (
    <div>
      <Routes>

        <Route path='/admin/*' element={<Admin />} />
        <Route path='/auth/*' element={<Auth />} />
      </Routes>
    </div>
  )
}

export default App
