import React from 'react'
import {BrowserRouter,Routes,Route}from  'react-router-dom'
export default function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path="/register" element={<register/>}></Route></Routes></BrowserRouter>
  )
}

