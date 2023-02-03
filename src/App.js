import React from 'react'
import SearchPage from "./component/SearchPage";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Edit from './component/Edit';

const App = () => {
  return (
    <div>
   
      <Router>
        <Routes>
          <Route element={<SearchPage/>} path="/"/>
          <Route element={<Edit/>} path="/Edit"/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

